import DateBar from './DateBar'
import Head from 'next/head'  

const byProduct = [
  'Total', 'Cash-Easy', 'Cash-Extra', 'Staff-Cash',
  'Ploan - Install', 'Nano - Revolve', 'Nano - Install'
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

const PortSummaryBar = () => (
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