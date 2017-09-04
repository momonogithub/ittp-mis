import Head from 'next/head'
import { monthToMonth } from '../../utilize/month'
import { createRow } from '../../utilize/createRow'

const buildRow = () => {
  const date = monthToMonth(2017,8)
  return createRow('month', date)
}

const Month = () => (
  <tbody className=''>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tr className='spanRow'>
      <td colSpan='10'>Month</td>
    </tr>
    {buildRow()}
  </tbody>
)

export default Month