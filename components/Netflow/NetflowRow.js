import Head from 'next/head'

const createCol = (title, dataRow) => {
  const arr = []
  let count = 0
  while(count < 30) {
    arr.push(<td key={`${title}col${count}`}>{dataRow[count]}</td>)
    count += 1
  }
  return arr
}

const NetflowRow = ({head, dataRow}) => (
  <tr key={`${Head}row`}>
    <td key={`${head}colHead`}>{head}</td>
    {createCol(head, dataRow)}
  </tr>
)

export default NetflowRow