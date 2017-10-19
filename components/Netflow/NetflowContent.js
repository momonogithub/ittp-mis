import { Component } from 'react'
import Head from 'next/head'
import { monthToMonth, createColHead, fullMonth, commaNumber } from '../../utilize/utils'
import { connect } from 'react-redux'

const columnHead = [
  '', 'Total OSB', 'Current', '%',
  'Bucket 1', '%', 'Bucket 2', '%',
  'Bucket 3', '%', 'Bucket 4', '%',
  'Bucket 5', '%', 'Bucket 6', '%',
  'Bucket 7', '%', 'Bucket 8', '%',
  'Bucket 9', '%', 'Bucket 10', '%',
  'Bucket 11', '%', 'Bucket 12', '%',
  'NPL', '%',
]

export const combineData = (data, year, month) => {
  const result = []
  const date = monthToMonth(year, month)
  let row = -1
  while(row < data.length) {
    let temp = []
    let col = 0 
    while(col < columnHead.length) {
      if(row < 0) temp.push(columnHead[col]) // row -1 input columnHead
      else {
        if (col < 1) temp.push(date[row]) // col 0 input date
        else temp.push(data[12-row][col - 1]) 
      }
      col += 1
    }
    result.push(temp)
    row += 1
  }
  return result
}

class NetflowContent extends Component {
  constructor(props) {
    super(props)
  }

  createRow = (data) => {
    const result = []
    const limit = data.length - 1
    let row = 0
    while(row < data.length) {
      if(row === 0) result.push(<tr key={`netflowRow${row}`}>{createColHead(data[0])}</tr>)
      else result.push(<tr key={`${data[row]}row`}>{this.createCol(`${data[row]}`, data[row])}</tr>)
      row += 1
    }
    return result
  }
  
  createCol = (key, dataRow) => {
    const result = []
    for(let col = 0 ; col < dataRow.length ; col += 1) {
      result.push(<td key={`${key}${col}`} className={col === 0 ? null: 'cellNumber'}>{commaNumber(dataRow[col])}</td>)
    }
    return result
  }
  
  render() {
    return (
      <table>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <tbody>
          <tr className='spanRow'>
            <td className='headTable' colSpan={`${columnHead.length}`}>
              Risk: Netflow as {fullMonth[this.props.month - 1]} {this.props.year}
            </td>
          </tr>
          {this.createRow(combineData(this.props.data, this.props.year, this.props.month))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  data: state.netflow.riskNetflow
})

export default connect(mapStateToProps, null)(NetflowContent)