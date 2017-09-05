import Head from 'next/head'
import { monthToMonth } from '../../utilize'
import ChanelRow from './ChannelRow'

const createCol = (date) => {
  const arr = []
  let count = 0
  while(count < date.length) {
    arr.push(<th key={`${date[count]}ChannelCol`}>{date[count]}</th>)
    count += 1
  }
  return arr
}

const ChannelContent = () => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='14'>Acquistion as Augest 2017</td>
      </tr>
      <tr>
        <th></th>
        {createCol(monthToMonth(2017,8))}
      </tr>
    </tbody>
    <ChanelRow branch='HQ' show={true}/>
    <ChanelRow branch='LAD' show={true}/>
    <ChanelRow branch='AMATA' show={true}/>
    
  </table>
)

export default ChannelContent