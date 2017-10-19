import Head from 'next/head'
import { monthToMonth, createColHead, fullMonth } from '../../utilize/utils'
import ChanelRow from './ChannelRow'
import { connect } from 'react-redux'

const ChannelContent = (props) => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='14'>
          Acquistion as {fullMonth[props.month - 1]} {props.year}
        </td>
      </tr>
      <tr>
        <th></th>
        {createColHead(monthToMonth(props.year,props.month))}
      </tr>
    </tbody>
    <ChanelRow branch='HQ' show={true}/>
    <ChanelRow branch='LAD' show={true}/>
    <ChanelRow branch='AMATA' show={true}/>
    
  </table>
)

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year
})

export default connect(mapStateToProps, null)(ChannelContent)