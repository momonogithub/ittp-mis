import { Component } from 'react'
import Head from 'next/head'
import { monthToMonth, createColHead, fullMonth, commaNumber } from '../../utilize/utils'
import { values } from 'lodash'
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

export const combineData = (dataObj, year, month) => {
  
  const date = monthToMonth(year, month)
  const result = [columnHead]
  const data = values(dataObj)
  for(let month = data.length - 1 ; month >= 0 ; month -= 1 ) {
    const osbPercent = data[month].osbPercent === null? 
      'N/A' : `${data[month].osbPercent}%`
    const arr = [date[12-month], data[month].osbTotal, data[month].osb, osbPercent]
    const bucket = data[month].bucket
    const percentBucket = data[month].percentBucket
    for(let b = 0 ; b < bucket.length ; b += 1 ) {
      const percent = percentBucket[b] === null? 'N/A' : `${percentBucket[b]}%`
      arr.push(bucket[b])
      arr.push(percent)
    }
    result.push(arr)
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
              <td className='headTable' colSpan={`${columnHead.length}`}>
                <label>
                  Risk: Netflow as {fullMonth[this.props.month - 1]} {this.props.year}
                </label>
              </td>
            </tr>
            {this.createRow(combineData(this.props.data, this.props.year, this.props.month))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  data: state.netflow.riskNetflow
})

export default connect(mapStateToProps, null)(NetflowContent)