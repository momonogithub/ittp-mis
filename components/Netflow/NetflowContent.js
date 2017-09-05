import Head from 'next/head'
import NetflowRow from './NetflowRow'
import { monthToMonth } from '../../utilize'

const createRow = (date) => {
  const arr = []
  let count = date.length - 1
  while (count > 0) {
    arr.push(<NetflowRow head={date[count]}/>)
    count -= 1
  }
  return arr
}

const NetflowContent = () => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='30'>Risk: Netflow as 2017</td>
      </tr>
      <tr>
        <th></th>
        <th>Total OSB</th>
        <th>Current</th>
        <th>%</th>
        <th>Bucket 1</th>
        <th>%</th>
        <th>Bucket 2</th>
        <th>%</th>
        <th>Bucket 3</th>
        <th>%</th>
        <th>Bucket 4</th>
        <th>%</th>
        <th>Bucket 5</th>
        <th>%</th>
        <th>Bucket 6</th>
        <th>%</th>
        <th>Bucket 7</th>
        <th>%</th>
        <th>Bucket 8</th>
        <th>%</th>
        <th>Bucket 9</th>
        <th>%</th>
        <th>Bucket 10</th>
        <th>%</th>
        <th>Bucket 11</th>
        <th>%</th>
        <th>Bucket 12</th>
        <th>%</th>
        <th>NPL</th>
        <th>%</th>
      </tr>
      {createRow(monthToMonth(2018, 1))}
    </tbody>
  </table>
)

export default NetflowContent