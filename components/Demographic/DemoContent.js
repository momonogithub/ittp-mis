import Head from 'next/head'
import Month from './Month'
import Gender from './Gender'

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
    <Month/>
    <Gender/>
  </table>
)

export default DemoContent