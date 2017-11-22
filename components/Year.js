import moment from 'moment'
import { Component } from 'react'
import { setYear } from '../reduxModules/date'
import { connect } from 'react-redux'

class Year extends Component {
  constructor(props) {
    super(props)
  }
  
  buildYear = () => {
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

  render() {
    return (
      <select value={this.props.year} onChange={this.props.setYear}>
        {this.buildYear()}
      </select>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  year: state.date.year
})

export default connect(mapStateToProps, { setYear })(Year)