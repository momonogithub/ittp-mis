import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth, createColHead, fullMonth } from '../../utilize/calculate'
import { fetchPortTotal } from '../../reduxModules/portfolio'
import { connect } from 'react-redux'

const rowHead = [
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

export const combineData = (data, year, month) => {
  const result = []
  const date = monthToMonth(year, month)
  let row = -1
  if(data.length > 0) {
    while(row < data[0].length) {
      const arr = []
      let col = 0
      while(col <= 13) {
        if(row < 0 ) {
          arr.push(date[col-1])
        } else {
          if(col < 1){
            arr.push(rowHead[row])
          }else {
            arr.push(data[13-col][row])
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

class PortTotal extends Component {
  constructor(props) {
    super(props)
  }
  
  createCol = (key, dataRow) => {
    const result = []
    let col = 0
    while(col < dataRow.length) {
      result.push(<td key={`${key}${col}`} className={col === 0 ? null: 'cellNumber'}>{dataRow[col]}</td>)
      col += 1
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
      result.push(<tr key={`${data[row]}row`}>{this.createCol(`${data[row]}`, data[row])}</tr>)
      row += 1
    }
    return result
  }

  render() {
    return (
      <table>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <tbody>
          <tr className='spanRow'>
            <td className='headTable' colSpan='14'>
              Portfolio : Total Product as {fullMonth[this.props.month - 1]} {this.props.year}
            </td>
          </tr>
          <tr>
            <th></th>
            {createColHead(monthToMonth(this.props.year, this.props.month))}
          </tr>
          {this.createRow(combineData(this.props.portTotal, this.props.year, this.props.month))}
        </tbody>
      </table>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  portTotal: state.portfolio.portTotal
})

export default connect(mapStateToProps, null)(PortTotal)