import Head from 'next/head'
import DemoRow from './DemoRow'
import { monthToMonth, createColHead } from '../../utilize'

const date = monthToMonth(2017,8)
const gender = ['Female', 'Male']
const monthlyIncome = [
  '< 8000',
  '8000 - 10000',
  '10000 - 12000',
  '12000 - 15000',
  '15000 - 20000',
  '20000 - 30000',
  '30000 - 40000',
  '40000 - 50000',
  '> 50000',
]
const age = [
  '20-25',
  '25-30',
  '30-35',
  '35-40',
  '40-45',
  '45-50',
  '50-55',
  '55-60',
]

const column = [
  'New account',
  'New account rate',
  'Loan size',
  'Loan size rate',
  'Average int rate',
  'Average loan term',
  'Outstanding balance',
  'Delinquent rate',
  'NPL rate',
]

const DemoContent = () => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='10'>Demographic: Total Account Profile as Augest 2017</td>
      </tr>
      <tr>
        <th></th>
        {createColHead(column)}
      </tr>
    </tbody>
    <DemoRow rowHead={'Month'} option={date} show={true}/>
    <DemoRow rowHead={'Gender'} option={gender} show={true}/>
    <DemoRow rowHead={'MonthlyIncome'} option={monthlyIncome} show={true}/>
    <DemoRow rowHead={'Age'} option={age} show={true}/>
  </table>
)

export default DemoContent