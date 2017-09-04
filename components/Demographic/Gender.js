import Head from 'next/head'
import { createRow } from '../../utilize/createRow'

const buildRow = () => {
  const gender = ['Female', 'Male']
  return createRow('gender', gender)
}

const Gender = () => (
  <tbody>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tr className='spanRow'>
      <td colSpan='10'>Gender</td>
    </tr>
    {buildRow()}
  </tbody>
)

export default Gender