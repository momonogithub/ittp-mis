import Head from 'next/head'
import { monthToMonth, createColHead, fullMonth } from '../../utilize'
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
        <td key={`${rowHead[count]}Col8`}></td>
        <td key={`${rowHead[count]}Col9`}></td>
        <td key={`${rowHead[count]}Col10`}></td>
        <td key={`${rowHead[count]}Col11`}></td>
        <td key={`${rowHead[count]}Col12`}></td>
        <td key={`${rowHead[count]}Col13`}></td>
      </tr>
    )
    count += 1
  }
  return arr
}

const rowHead1 = [
  'Total accounts',
  'Total customer',
  'Customer with 2 accounts',
  'New accounts',
  'MTD closed account',
  'Delinquent account',
  'NPL account',
  'Non-starter accounts',
]

const rowHead2 = [
  'Total loan size',
  'Total loan size in B1-B6',
  'Total payment received',
  'Delinquent amount',
]

const rowHead3 = [
  'Loan size',
  'Interest rate',
]

const rowHead4 = [
  'Growth rate',
  '(Delinquent + NPL amount)/total port ENR',
  'Delinquent rate (B1-B6)',
  'Delinquent rate (B1-B3)',
  'NPL Rate (B7++)',
  'Recovery Rate',
]

const PortTotal = (props) => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='14'>
          Portfolio : Total Product as {fullMonth[props.month - 1]} {props.year}
        </td>
      </tr>
      <tr>
        <th></th>
        {createColHead(monthToMonth(props.year, props.month))}
      </tr>
      <tr className='spanRow'>
        <td colSpan='14'>Portfolio</td>
      </tr>
      {createRow(rowHead1)}
      <tr className='spanRow'>
        <td colSpan='14'>Acquistion</td>
      </tr>
      {createRow(rowHead2)}
      <tr className='spanRow'>
        <td colSpan='14'>Attrition</td>
      </tr>
      {createRow(rowHead3)}
      <tr className='spanRow'>
        <td colSpan='14'>Ratio</td>
      </tr>
      {createRow(rowHead4)}
    </tbody>
  </table>
)

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year
})

export default connect(mapStateToProps, null)(PortTotal)