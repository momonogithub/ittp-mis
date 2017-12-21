import { Component } from 'react'
import Head from 'next/head'
import { monthToMonth, createColHead, fullMonth, commaNumber } from '../../utilize/utils'
import { connect } from 'react-redux'

export const rowHead = [
  'Total loan',
  'New account',
  'Loan size',
  'Average int rate',
  'Average loan term',
  'Outstanding balance',
  'Delinquent rate',
  'NPL rate',
]

export const combineData = (data) => {
  const result = []
  let header = ['']
  header = header.concat(rowHead)
  result.push(header)
  for(let demo in data) {
    const row = []
    row.push(demo, '', '', '', '', '' ,'', '')
    result.push(row)
    for(let group in data[demo]){
      const subRow = []
      subRow.push(
        group,
        data[demo][group].totalLoan,
        data[demo][group].newAccount,
        data[demo][group].loanSize,
        data[demo][group].averageInt,
        data[demo][group].averageLoanTerm,
        data[demo][group].osb,
        checkValue(data[demo][group].delinquentRate),
        checkValue(data[demo][group].nplRate),
      )
      result.push(subRow)
    }   
  }
  return result
}

const checkValue = value => {
  switch(value) {
    case 'No Data':
      return value
    case null:
      return 'N/A'
    default :
      return `${value}%`
  }
}

class DemoTable extends Component {
  constructor(props) {
    super(props)
  }

  createRow = data => {
    const result = []
    let subRow = ''
    for(let row = 1 ; row < data.length ; row +=1) {
      if(data[row][1] === '') {
        subRow = data[row][0]
        if(this.props.demoList[`${subRow}`].status) {
          result.push(
            <tr key={`${data[row][0]}row`} className='spanRow'>
              <td className='cellText' key={`${data[row][0]}span`} colSpan={`${rowHead.length + 1}`}>
                {`${data[row][0]}`}
              </td>
            </tr>
          )
        }
      }else if (subRow !== '') {
        if(this.props.demoList[`${subRow}`].status) {
          const key = `${subRow}${data[row][0]}`
          result.push(
            <tr key={`${key}`}>
              {this.createCol(key, data[row])}
            </tr>
          )
        }
      }
    }
    return result
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

  render() {
    return (
      <div className='contentWrapper'>
        <table>
          <Head><link href='/static/style.css' rel='stylesheet'/></Head>
          <tbody>
            <tr className='spanRow'>
              <td className='headTable' colSpan={`${rowHead.length + 1}`}>
                <label>
                  Demographic: Total Account Profile as {fullMonth[this.props.month - 1]} {this.props.year}
                </label>
              </td>
            </tr>
            <tr>
              <th></th>
              {createColHead(rowHead)}
            </tr>
            {this.createRow(combineData(this.props.demo))}
          </tbody>
        </table>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  demo: state.demographic.demographic,
  demoList: state.demographic.demoList
})

export default connect(mapStateToProps, null)(DemoTable)