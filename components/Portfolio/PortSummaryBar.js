import DateBar from '../DateBar'
import Head from 'next/head'
import { buildCheckbox } from '../../utilize'

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
      </div>
      <div className='barContent'>
        <button className='submitButton'>Submit</button>
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
      <div className='barContent'>
        <button className='downloadButton'>Download Excel</button>
      </div>
    </div>
  </div>
)

export default PortSummaryBar