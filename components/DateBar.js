import Head from 'next/head'
import Month from './Month'
import Year from './Year'

const DateBar = ({year, month}) => (
  <div>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <div className={year === false ? 'hidden': null }>
      <label>Year</label>
      <div className='infield'>
        <Year/>
      </div>
    </div>
    <div className={month === false ? 'inform hidden': 'inform' }>
      <label>Month</label>
      <div className='infield'>
        <Month/>
      </div>
    </div>
  </div>
)

export default DateBar