import DateBar from '../DateBar'
import Head from 'next/head'

const byApplication = [
  '13 month', 'Gender', 'Loan size', 'Monthly Income', 'Age', 'Region',
  'Marital status', 'Channel', 'Education', 'Bussniess type', 'Occupation',
  'Working status'
]

const DemographicBar = () => (
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
        <label>Option:</label>
        <form>
        <div className='inform'>
        </div>
        </form>
      </div>
    </div>
  </div>
)

export default DemographicBar