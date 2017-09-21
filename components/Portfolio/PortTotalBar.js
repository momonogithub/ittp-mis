import DateBar from '../DateBar'
import Head from 'next/head'
import PortType from './PortType'

const PortTotalBar = () => (
  <div>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <div className='barContentList'>
      <div className='barContent'>
        <DateBar year={true} month={true}/>
        <PortType page='total'/>
      </div>
      <div className='barContent'>
        <button className='downloadButton'>Download Excel</button>
      </div>
    </div>
  </div>
)

export default PortTotalBar