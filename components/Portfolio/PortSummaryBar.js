import DateBar from '../DateBar'
import Head from 'next/head'
import { buildCheckbox } from '../../utilize'
import PortType from './PortType'

const byProduct = [
  'Total', 'Cash-Easy', 'Cash-Extra', 'Staff-Cash',
  'Ploan - Install', 'Nano - Revolve', 'Nano - Install'
]

const PortSummaryBar = () => (
  <div>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <div className='barContentList'>
      <div className='barContent'>
        <DateBar year={true} month={true}/>
        <PortType page='summary'/>
      </div>
      <div className='barContent'>
        <button className='downloadButton'>Download Excel</button>
      </div>
    </div>
    <div className='barContentList'>
      <div className='barContent'>
        <label>ByProduct:</label>
        <form>
        <div className='inform'>
          {buildCheckbox(byProduct)}
        </div>
        </form>
      </div>
    </div>
  </div>
)

export default PortSummaryBar