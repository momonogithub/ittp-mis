import { Component } from 'react'
import Head from 'next/head'
import { createColHead, portCreateRow, fullMonth, commaNumber } from '../../utilize/utils'
import { connect } from 'react-redux'

const rowHead = [
  'Total port since open',
  'Active account',
  'Average loan size',
  'Average interest rate',
  'Total loan amount since open',
  '2 accounts customer',
  'Total payment received',
  'New accounts',
  'Total  amount of new loans',
  'Average loan size',
  'Average interest rate',
  'MTD Closed accounts',
  'MTD Closed account / Total port',
  'Delinquent account (B1-B6)',
  'NPL account (B7++)',
  'Delinquent rate (B1-B3)',
  'Delinquent rate (B1-B6)',
  'NPL rate (B3++)',
  'Recovey Rate',
]

export const combineData = (data, products) => {
  const result = []
  const divideRow = []
  if(data.length > 0 && products.length > 0) {
    for(let row = 0 ; row <= rowHead.length ; row += 1) {
      const arr = []
      for(let col = 0; col <= data.length + 1 ; col += 1) {
        if(row < 1) {
          if(col < 1) {
            arr.push('')
          } else {
            arr.push(products[col - 1])
          }
        } else {
          if(col < 1) {
            arr.push(rowHead[row - 1])
          } else if(col === 1) {
            arr.push(0)
          } else {
            arr[1] += data[col - 2][row - 1]
            arr.push(data[col - 2][row - 1])
            if(col === data.length + 1) {

            }
          }
        }
      }
      result.push(arr)
    }
  }
  // console.log(data)
  // console.log(result)
  return result
}

class PortSummary extends Component {
  constructor(props) {
    super(props)
  }
  
  getProductList = (products) => {
    const result = ['Total']
    for (let item in products) {
      result.push(products[item].name)
    }
    return result
  }

  createRow = (data) => {
    const result = []
    for(let row = 1 ; row < data.length ; row += 1) {
      result.push(<tr key={`PortSumRow ${row}`}>{this.createCol(`${data[row][0]}`, data[row])}</tr>)
    }
    return result
  }
  
  createCol = (key, dataRow) => {
    const result = []
    for(let col = 0 ; col < dataRow.length ; col += 1) {
      result.push(<td key={`${key}${col}`} className={col === 0 ? null: 'cellNumber'}>{dataRow[col]}</td>)
    }
    return result
  }

  render() {
    const products = this.getProductList(this.props.product)
    return (
      <table>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <tbody>
          <tr className='spanRow'>
            <td className='headTable' colSpan={`${products.length+1}`}>
              Portfolio : Summary Page as {fullMonth[this.props.month - 1]} {this.props.year}
            </td>
          </tr>
          <tr>
            <th></th>
            {createColHead(products)}
          </tr>
          {this.createRow(combineData(this.props.portSummary, products))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  portSummary: state.portfolio.portSummary,
  product: state.product,
})

export default connect(mapStateToProps, null)(PortSummary)