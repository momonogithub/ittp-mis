import Head from 'next/head'

const createRow = (rowHead, option) => {
  const arr = []
  let count = 0
  while(count < option.length) {
    arr.push(
      <tr key={`${option[count]}row`}>
        <td key={`${option[count]}col`}>{option[count]}</td>
        <td key={`${option[count]}data1`}></td>
        <td key={`${option[count]}data2`}></td>
        <td key={`${option[count]}data3`}></td>
        <td key={`${option[count]}data4`}></td>
        <td key={`${option[count]}data5`}></td>
        <td key={`${option[count]}data6`}></td>
        <td key={`${option[count]}data7`}></td>
        <td key={`${option[count]}data8`}></td>
        <td key={`${option[count]}data9`}></td>
      </tr>
    )
    count +=1
  }
  arr.push(
    <tr key={`${rowHead}TotalRow`}>
      <td key={`${rowHead}TotalCol`}>Total</td>
      <td key={`${rowHead}TotalData1`}></td>
      <td key={`${rowHead}TotalData2`}></td>
      <td key={`${rowHead}TotalData3`}></td>
      <td key={`${rowHead}TotalData4`}></td>
      <td key={`${rowHead}TotalData5`}></td>
      <td key={`${rowHead}TotalData6`}></td>
      <td key={`${rowHead}TotalData7`}></td>
      <td key={`${rowHead}TotalData8`}></td>
      <td key={`${rowHead}TotalData9`}></td>
    </tr>
  )
  return arr
}


const DemoRow = ({rowHead, option, show}) => (
  <tbody className={show===false? 'hidden':null}>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <tr className='spanRow'>
      <td colSpan='10'>{rowHead}</td>
    </tr>
    {createRow(rowHead, option)}
  </tbody>
)

export default DemoRow