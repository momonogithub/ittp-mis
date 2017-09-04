import moment from 'moment'
import Head from 'next/head'

const buildYear = () => {
  const arr = []
  let start = 2016
  const current = new Date().getFullYear()
  arr.push(<option key='year' value='0' disabled>Choose Year</option>)
  while(start <= current) {
      arr.push(<option key={start} value={start}>{start}</option>)
      start+=1
  }
  return arr
}

const buildMonth = () => {
  const arr = []
  const month = moment.months()
  let count = 1
  arr.push(<option key='month' value='0' disabled>Choose Month</option>)
  while(count <= month.length){
    arr.push(<option key={`month${count}`} value={count}>{month[count-1]}</option>)
    count+=1
  }
  return arr
}

const DateBar = (props) => (
  <div>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <label>Year</label>
    <div className='infield'>
      <select defaultValue='0'>
        {buildYear()}
      </select>
    </div>
    <div className='inform'>
      <label>Month</label>
      <div className='infield'>
        <select defaultValue='0'>
          {buildMonth()}
        </select>
      </div>
    </div>
  </div>
)

export default DateBar