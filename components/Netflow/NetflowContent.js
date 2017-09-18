import Head from 'next/head'
import NetflowRow from './NetflowRow'
import { monthToMonth, createColHead, fullMonth } from '../../utilize/calculate'
import { connect } from 'react-redux'

const createRow = (date, data) => {
  const arr = []
  let count = data.length - 1
  while (count >= 0) {
    arr.push(<NetflowRow key={`${date[count]}NFR`} head={date[count]} dataRow={data[count]}/>)
    count -= 1
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

const NetflowContent = (props) => (
  <table>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tbody>
      <tr className='spanRow'>
        <td className='headTable' colSpan='30'>
          Risk: Netflow as {fullMonth[props.month - 1]} {props.year}
        </td>
      </tr>
      <tr>
        <th></th>
        {createColHead(column)}
      </tr>
      {createRow(monthToMonth(props.year, props.month), props.data)}
    </tbody>
  </table>
)

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  data: state.netflow.riskNetflow
})

export default connect(mapStateToProps, null)(NetflowContent)