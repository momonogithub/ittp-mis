import moment from 'moment'

export const monthToMonth = (year, month) => {
  const arr = []
  let count = 0
  while(count < 13) {
    arr.push(
      moment(`${year}${month}`, 'YYYYM').subtract(count, 'month').format('MMM YY')
    )
    count+=1
  }
  return arr
}