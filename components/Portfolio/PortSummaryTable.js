import { Component } from 'react'
import Head from 'next/head'
import { createColHead, portCreateRow, fullMonth, commaNumber } from '../../utilize/utils'
import { connect } from 'react-redux'

export const rowHead = [
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

export const combineData = (dataObj, products) => {
  const result = []
  const divideRow = []
  const data = []
  // convert JSON object to array
  for(let product in dataObj) {
    const arr = []
    for(let item in dataObj[product]) {
      arr.push(dataObj[product][item])
    }
    data.push(arr)
  }
  if(data.length > 0 && products.length > 0) {
    for(let row = 0 ; row <= rowHead.length ; row += 1) {
      const arr = []
      for(let col = 0; col < data.length + 1 ; col += 1) {
        if(row < 1) {
          if(col < 1) {
            arr.push('')
          } else {
            arr.push(products[col - 1])
          }
        } else {
          if(col < 1) {
            arr.push(rowHead[row - 1])
          } else {
            if(data[col - 1][row - 1] !== 'No Data') {
              if(data[col - 1][row - 1] === null) {
                arr.push('N/A')
              } else if(row > 15) {
                arr.push(`${commaNumber(data[col - 1][row - 1])}%`)
              }
              else {
                arr.push(commaNumber(data[col - 1][row - 1]))
              }
            } else {
              arr.push(commaNumber(data[col - 1][row - 1]))
            }
            
          }
        }
      }
      result.push(arr)
    }
  }
  return result
}

class PortSummary extends Component {
  constructor(props) {
    super(props)
  }
  
  getProductList = (products) => {
    const result = ['Total']
    for (let item in products) {
      if(products[item].status === true) {
        result.push(products[item].name)
      }
    }
    return result
  }

  createRow = (data) => {
    const result = []
    const colStatus = []
    for(let item in this.props.product) {
      colStatus.push(this.props.product[item].status)
    }
    for(let row = 1 ; row < data.length ; row += 1) {
      result.push(
        <tr key={`PortSumRow ${row}`}>
          {this.createCol(`${data[row][0]}`, data[row], colStatus)}
        </tr>
      )
    }
    return result
  }
  
  createCol = (key, dataRow, colStatus) => {
    const result = []
    for(let col = 0 ; col < dataRow.length ; col += 1) {
      if(col < 2 ||  colStatus[col - 2] === true) {
        result.push(
          <td key={`${key}${col}`} className={col === 0 ? 'cellText': 'cellNumber'}>{dataRow[col]}</td>
        )
      }
    }
    return result
  }

  render() {
    const products = this.getProductList(this.props.product)
    return (
      <div className='contentWrapper'>
        <table>
          <Head><link href='/static/style.css' rel='stylesheet'/></Head>
          <tbody>
            <tr className='spanRow'>
              <td className='headTable' colSpan={`${products.length+1}`}>
                <label>
                  Portfolio : Summary Page as {fullMonth[this.props.month - 1]} {this.props.year}
                </label>
              </td>
            </tr>
            <tr>
              <th></th>
              {createColHead(products)}
            </tr>
            {this.createRow(combineData(this.props.portSummary, products))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  month: state.date.month,
  portSummary: state.portfolio.portSummary,
  product: state.product,
  year: state.date.year,
})

export default connect(mapStateToProps, null)(PortSummary)