import moment from 'moment'
import React, {Component} from 'react'
import { setMonth } from '../reduxModules/date'
import { connect } from 'react-redux'
import { fullMonth } from '../utilize'

const buildMonth = () => {
  const arr = []
  let count = 1
  arr.push(<option key='month' value='0' disabled>Choose Month</option>)
  while(count <= fullMonth.length){
    arr.push(<option key={`month${count}`} value={count}>{fullMonth[count-1]}</option>)
    count+=1
  }
  return arr
}

const Month = (props) => (
  <select value={props.month} onChange={props.setMonth} >
    {buildMonth()}
  </select>
)

const mapStateToProps = (state) => ({ 
  month: state.date.month
})

export default connect(mapStateToProps, { setMonth })(Month)