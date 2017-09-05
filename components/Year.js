import moment from 'moment'
import React, {Component} from 'react'
import { setYear } from '../reduxModules/date'
import { connect } from 'react-redux'

const buildYear = () => {
  const arr = []
  let start = 2016
  const current = new Date().getFullYear()
  arr.push(<option key='year' value='0' disabled>Choose Year</option>)
  while(start <= current) {
      arr.push(<option key={start} value={start}>{start}</option>)
      start+=1
  }
  return arr
}

const Year = (props) => (
  <select value={props.year} onChange={props.setYear}>
    {buildYear()}
  </select>
)

const mapStateToProps = (state) => ({ 
  year: state.date.year
})

export default connect(mapStateToProps, { setYear })(Year)