import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth } from '../../utilize/utils'
import { connect } from 'react-redux'
import { rowHead } from './PortTotalTable'
import { fullMonth } from '../../utilize/utils'
import SimpleAreaChart from '../Charts/SimpleAreaChart'

class PortTotalChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 0,
      name: rowHead[0]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  chartData = (portTotal, month) => {
    const data = []
    let count = month.length - 1
    for(let date in portTotal) {
      let checkChart = 0
      for(let item in portTotal[date]) {
        if(checkChart === parseInt(this.state.display)) {
          data.push({
            name: month[count],
            [rowHead[this.state.display]] : portTotal[date][item] 
          })
          break
        }
        checkChart += 1
      }
      count -= 1
    }
    return data
  }

  dropDownList = () => {
    const result = []
    for(let i = 0 ; i < rowHead.length - 7 ; i += 1) {
      result.push(
        <option key={rowHead[i]} value={i}>{rowHead[i]}</option>
      )
    }
    return result
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({
      display : value,
      name : rowHead[value]
    })
  }
  
  render() {
    return (
      <div className='contentWrapper'>
        <div className='chartBar'>
          <label>Display chart as {fullMonth[this.props.month - 1]} {this.props.year}</label>
          <div className='infield'>
            <select value={this.state.display} onChange={this.handleChange}>
            {this.dropDownList()}
            </select>
          </div>
        </div>
        <SimpleAreaChart 
          data={this.chartData(this.props.portTotal ,
            monthToMonth(this.props.year, this.props.month))}
          dataKey={rowHead[this.state.display]}/>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  portTotal: state.portfolio.portTotal
})

export default connect(mapStateToProps, null)(PortTotalChart)