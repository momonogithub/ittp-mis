import moment from 'moment'

export const fixedTwoDecimal = data => Math.ceil(data * 100) / 100

export const commaNumber = number => {
  if(typeof number === 'number') {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  return number
}

export const fullMonth = moment.months()

export const shortMonth = moment.monthsShort()

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

export const createColHead = (column) => {
  const arr = []
  let count = 1
  while(count < column.length + 1) {
    arr.push(<th key={`${column[count]}ColHead${count}`}>{column[count - 1]}</th>)
    count += 1
  }
  return arr
}