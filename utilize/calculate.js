import moment from 'moment'

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

export const buildCheckbox = (data) => {
  const arr = []
  let count = 0
  while(count < data.length) {
    arr.push(
      <div key={`${data[count].name}Div`}>
        <input 
          type="checkbox" key={`${data[count].name}Box`} 
          name={data[count].name} 
          value={data[count].name}
        />
        {data[count].name}
      </div>
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