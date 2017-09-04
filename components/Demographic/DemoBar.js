import DateBar from '../DateBar'
import Head from 'next/head'

const byApplication = [
  '13 month', 'Gender', 'Loan size', 'Monthly Income', 'Age', 'Region',
  'Marital status', 'Channel', 'Education', 'Bussniess type', 'Occupation',
  'Working status'
]

const buildCheckbox = (data) => {
  const arr = []
  let count = 1
  while(count <= data.length) {
    arr.push(
      <div key={data[count-1]+'Div'}>
        <input type="checkbox" key={data[count-1]+'Box'} name={data[count-1]} value={data[count-1]}/>
        {data[count-1]}
      </div>
    )
    count+=1
  }
  return arr
}

const DemographicBar = () => (
  <div>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <div className='barContentList'>
      <div className='barContent'>
        <DateBar/>
      </div>
      <div className='barContent'>
        <button className='submitButton'>Submit</button>
      </div>
    </div>
    <div className='barContentList'>
      <div className='barContent'>
        <label>Option:</label>
        <form>
        <div className='inform'>
          {buildCheckbox(byApplication)}
        </div>
        </form>
      </div>
      <div className='barContent'>
        <button className='downloadButton'>Download Excel</button>
      </div>
    </div>
  </div>
)

export default DemographicBar