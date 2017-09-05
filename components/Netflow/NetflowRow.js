import Head from 'next/head'

const createCol = (title) => {
  const arr = []
  let count = 1
  while(count < 30) {
    arr.push(<td key={`${title}col${count}`}></td>)
    count += 1
  }
  return arr
}

const NetflowRow = ({ head }) => (
  <tr key={`${Head}row`}>
    <td key={`${head}col0`}>{head}</td>
    {createCol(head)}
  </tr>
)

export default NetflowRow