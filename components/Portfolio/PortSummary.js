import { Component } from 'react'
import Head from 'next/head'
import { createColHead, portCreateRow, fullMonth } from '../../utilize/calculate'
import { connect } from 'react-redux'

const createRow = (rowHead) => {
  const arr = []
  let count = 0
  while(count < rowHead.length) {
    arr.push(
      <tr key={`${rowHead[count]}row`}>
        <td key={`${rowHead[count]}Col0`}>{rowHead[count]}</td>
        <td key={`${rowHead[count]}Col1`}></td>
        <td key={`${rowHead[count]}Col2`}></td>
        <td key={`${rowHead[count]}Col3`}></td>
        <td key={`${rowHead[count]}Col4`}></td>
        <td key={`${rowHead[count]}Col5`}></td>
        <td key={`${rowHead[count]}Col6`}></td>
        <td key={`${rowHead[count]}Col7`}></td>
      </tr>
    )
    count += 1
  }
  return arr
}

const column = [
  'Total',
  'Cash-Easy',
  'Cash-Extra',
  'Staff-Cash',
  'Ploan - Install',
  'Nano - Revolve',
  'Nano - Install',
]

const rowHead1 = [
  'Total port since open',
  'Active account',
  'Average loan size',
  'Average interest rate',
  'Total loan amount since open',
  '2 accounts customer',
  'Total payment received',
]

const rowHead2 = [
  'New accounts',
  'Total  amount of new loans',
  'Average loan size',
  'Average interest rate',
]

const rowHead3 = [
  'MTD Closed accounts',
  'MTD Closed account / Total port',
]

const rowHead4 = [
  'Delinquent account (B1-B6)',
  'NPL account (B7++)',
  'Delinquent rate (B1-B3)',
  'Delinquent rate (B1-B6)',
  'NPL rate (B3++)',
  'Recovey Rate',
]

class PortSummary extends Component {
  constructor(props) {
    super(props)
  }
  
  getProductList = (products = []) => {
    const result = ['Total']
    if(products.length > 0) {
      products.map(product => {
        result.push(product.name)
        return product
      })
    }
    console.log(result)
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
          <tr className='spanRow'>
            <td colSpan='8'>Portfolio</td>
          </tr>
          {createRow(rowHead1)}
          <tr className='spanRow'>
            <td colSpan='8'>Acquistion</td>
          </tr>
          {createRow(rowHead2)}
          <tr className='spanRow'>
            <td colSpan='8'>Attrition</td>
          </tr>
          {createRow(rowHead3)}
          <tr className='spanRow'>
            <td colSpan='8'>Risk</td>
          </tr>
          {createRow(rowHead4)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  product: state.product,
})

export default connect(mapStateToProps, null)(PortSummary)