import Head from 'next/head'
import { Component } from 'react'
import { connect } from 'react-redux'
import { rowHead } from './DemoTable'
import TwoLevelPieChart from '../Charts/TwoLevelPieChart'

class DemoChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 0,
      groupNumber: 0,
    }
  }
  changeDisplay = event => {
    const value = event.target.value
    this.setState({
      display : value,
    })
  }

  changeGroup = event => {
    const value = event.target.value
    this.setState({
      groupNumber : value,
    })
  }

  chartData = (demographic, group, display) => {
    const data = []
    for(let sub in demographic[group]) {
      let count = 0
      for(let item in demographic[group][sub]) {
        if(count === parseInt(display)) {
          data.push({name: sub, value: demographic[group][sub][item]})
        break
        }
        count += 1
      }
    }
    return data
  }

  dropDownList = (lists) => {
    const result = []
    for(let i = 0 ; i < lists.length ; i += 1) {
      result.push(
        <option key={`DemoCharts${lists[i]}`} value={i}>{lists[i]}</option>
      )
    }
    return result
  }

  getDemogroup = () => {
    const demolist = this.props.demolist
    const group = []
    for(let item in demolist) {
      if(item !== 'Total' && item !== 'Month') {
        group.push(item)
      }
    }
    return group
  }

  getRowHead = () => {
    const newRowHead = []
    for(let i = 0 ; i < rowHead.length - 5 ; i += 1) {
      newRowHead.push(rowHead[i])
    }
    return newRowHead
  }

  render() {
    const demogroup = this.getDemogroup()
    const newRowHead = this.getRowHead()
    return (
      <div className='contentWrapper'>
        <div className='chartBar'>
          <div className='inform'>
            <label>Demogroup</label>
            <div className='infield'>
              <select value={this.state.groupNumber} onChange={this.changeGroup}>
              {this.dropDownList(demogroup)}
              </select>
            </div>
          </div>
          <div className='inform'>
            <label>Display chart</label>
            <div className='infield'>
              <select value={this.state.display} onChange={this.changeDisplay}>
              {this.dropDownList(newRowHead)}
              </select>
            </div>
          </div>
        </div>
        <TwoLevelPieChart 
          data={
            this.chartData(
              this.props.demographic,
              demogroup[this.state.groupNumber],
              this.state.display)
          }/>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  demolist: state.demographic.demoList,
  demographic: state.demographic.demographic
})

export default connect(mapStateToProps, null)(DemoChart)