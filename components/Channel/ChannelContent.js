import Head from 'next/head'
import { monthToMonth, createColHead } from '../../utilize'
import ChanelRow from './ChannelRow'

const ChannelContent = () => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='14'>Acquistion as Augest 2017</td>
      </tr>
      <tr>
        <th></th>
        {createColHead(monthToMonth(2017,8))}
      </tr>
    </tbody>
    <ChanelRow branch='HQ' show={true}/>
    <ChanelRow branch='LAD' show={true}/>
    <ChanelRow branch='AMATA' show={true}/>
    
  </table>
)

export default ChannelContent