import Head from 'next/head'
import DateBar from '../DateBar'
import ProductCheckbox from '../ProductCheckbox'

const byBranch = [
  'HQ',
  'LAD',
  'AMATA'
]

const byProduct = [
  'Total', 'Cash-Easy', 'Cash-Extra', 'Staff-Cash',
  'Ploan - Install', 'Nano - Revolve', 'Nano - Install'
]

const ChannelBar = () => (
  <div>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <div className='barContentList'>
      <div className='barContent'>
        <DateBar year={true} month={true}/>
      </div>
      <div className='barContent'>
        <button className='button download'>Download Excel</button>
      </div>
    </div>
    <div className='barContentList'>
      <div className='barContent'>
        <label>ByChannel:</label>
        <form>
        <div className='inform'>
        </div>
        </form>
      </div>
    </div>
    <div className='barContentList'>
      <div className='barContent'>
        <label>ByProduct:</label>
        <form>
        <div className='inform'>
          <ProductCheckbox/>
        </div>
        </form>
      </div>
    </div>
  </div>
)

export default ChannelBar