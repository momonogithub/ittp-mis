import Head from 'next/head'
import DateBar from '../DateBar'
import ProductCheckbox from '../ProductCheckbox'

const byBranch = [
  'HQ',
  'LAD',
  'AMATA'
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
  </div>
)

export default ChannelBar