export const createRow = (title, option) => {
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
    <tr key={`${title}TotalRow`}>
      <td key={`${title}TotalCol`}>Total</td>
      <td key={`${title}TotalData1`}></td>
      <td key={`${title}TotalData2`}></td>
      <td key={`${title}TotalData3`}></td>
      <td key={`${title}TotalData4`}></td>
      <td key={`${title}TotalData5`}></td>
      <td key={`${title}TotalData6`}></td>
      <td key={`${title}TotalData7`}></td>
      <td key={`${title}TotalData8`}></td>
      <td key={`${title}TotalData9`}></td>
    </tr>
  )
  return arr
}