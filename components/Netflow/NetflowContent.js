import Head from 'next/head'
import NetflowRow from './NetflowRow'
import { monthToMonth, createColHead } from '../../utilize'

const createRow = (date) => {
  const arr = []
  let count = 0
  while (count < date.length) {
    arr.push(<NetflowRow key={`${date[count]}NFR`} head={date[count]}/>)
    count += 1
  }
  return arr
}

const column = [
  'Total OSB',
  'Current',
  '%',
  'Bucket 1',
  '%',
  'Bucket 2',
  '%',
  'Bucket 3',
  '%',
  'Bucket 4',
  '%',
  'Bucket 5',
  '%',
  'Bucket 6',
  '%',
  'Bucket 7',
  '%',
  'Bucket 8',
  '%',
  'Bucket 9',
  '%',
  'Bucket 10',
  '%',
  'Bucket 11',
  '%',
  'Bucket 12',
  '%',
  'NPL',
  '%',
]

const NetflowContent = () => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='30'>Risk: Netflow as Auguest 2017</td>
      </tr>
      <tr>
        <th></th>
        {createColHead(column)}
      </tr>
      {createRow(monthToMonth(2017, 8))}
    </tbody>
  </table>
)

export default NetflowContent