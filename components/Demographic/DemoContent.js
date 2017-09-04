import Head from 'next/head'
import DemoRow from './DemoRow'
import { monthToMonth } from '../../utilize'

const date = monthToMonth(2017,8)
const gender = ['Female', 'Male']

const DemoContent = () => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='10'>Demographic: Total Account Profile as Augest 2017</td>
      </tr>
      <tr>
        <th></th>
        <th>New account</th>
        <th>New account rate</th>
        <th>Loan size</th>
        <th>Loan size rate</th>
        <th>Average int rate</th>
        <th>Average loan term</th>
        <th>Outstanding balance</th>
        <th>Delinquent rate</th>
        <th>NPL rate</th>
      </tr>
    </tbody>
    <DemoRow rowHead={'Month'} option={date}/>
    <DemoRow rowHead={'Gender'} option={gender}/>
  </table>
)

export default DemoContent