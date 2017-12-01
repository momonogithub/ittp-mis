import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth, createColHead, fullMonth, commaNumber } from '../../utilize/utils'
import { connect } from 'react-redux'

export const rowHead = [
  'Total accounts',
  'Total customer',
  'Customer with 2 accounts',
  'New accounts',
  'MTD closed account',
  'Delinquent account',
  'NPL account',
  'Non-starter accounts',
  'Total loan size',
  'Total loan size in B1-B6',
  'Total payment received',
  'Delinquent amount',
  'Loan size',
  'Interest rate',
  'Growth rate',
  '(Delinquent + NPL amount)/total port ENR',
  'Delinquent rate (B1-B6)',
  'Delinquent rate (B1-B3)',
  'NPL Rate (B7++)',
  'Recovery Rate',
]

export const combineData = (dataObj, year, month) => {
  const result = []
  const data = []
  const date = monthToMonth(year, month)
  let row = -1
  
  // convert JSON object to array
  for(let month in dataObj) {
    const arr = []
    for(let item in dataObj[month]) {
      arr.push(dataObj[month][item])
    }
    data.push(arr)
  }

  // display on table
  if(data.length > 0) {
    while(row < data[0].length) {
      const arr = []
      let col = 0
      while(col <= 13) {
        if(row < 0 ) {
          if(col === 0) arr.push('')
          arr.push(date[col])
        } else {
          if(col < 1){
            arr.push(rowHead[row])
          } else {
            if(data[13-col][row] !== 'No Data') {
              if(data[13-col][row] === null) {
                arr.push('N/A')
              }
              else if(row < 13) {
                arr.push(data[13-col][row])
              }else {
                arr.push(`${data[13-col][row]}%`)
              }
            }else {
              arr.push(data[13-col][row])
            }
          }
        }
        col += 1
      }
      result.push(arr)
      row += 1
    }
  }
  return result
}

class PortTotalTable extends Component {
  constructor(props) {
    super(props)
  }
  
  createCol = (key, dataRow) => {
    const result = []
    for(let col = 0 ; col < dataRow.length ; col += 1) {
      result.push(
        <td key={`${key}${col}`} className={col === 0 ? 'cellText': 'cellNumber'}>
          {commaNumber(dataRow[col])}
        </td>
      )
    }
    return result
  }

  createRow = data => {
    const result = []
    const spanRow = [
      'Accounts',
      'Financial (Baht)',
      'Average',
      'Ratio'
    ]
    const atSpan = [1,9,13,15]
    let count = 0
    let row = 1
    while(row < data.length) {
      if(row === atSpan[count]) {
        result.push(
          <tr key={`${spanRow[count]}row`} className='spanRow'>
            <td key={`${spanRow[count]}span`} colSpan='14'>{spanRow[count]}</td>
          </tr>
        )
        count += 1
      }
      result.push(<tr key={`PortTotalTableRow ${[row]}`}>{this.createCol(`${data[row]}`, data[row])}</tr>)
      row += 1
    }
    return result
  }

  render() {
    return (
      <div className='contentWrapper'>
        <table>
          <Head><link href='/static/style.css' rel='stylesheet'/></Head>
          <tbody>
            <tr className='spanRow'>
              <td className='headTable' colSpan='14'>
                <label>
                  Portfolio : Total Product as {fullMonth[this.props.month - 1]} {this.props.year}
                </label>
              </td>
            </tr>
            <tr>
              <th></th>
              {createColHead(monthToMonth(this.props.year, this.props.month))}
            </tr>
            {this.createRow(combineData(this.props.portTotal, this.props.year, this.props.month))}
          </tbody>
        </table>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  portTotal: state.portfolio.portTotal
})

export default connect(mapStateToProps, null)(PortTotalTable)