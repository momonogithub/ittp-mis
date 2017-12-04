import Head from 'next/head'
import { Component } from 'react'
import { connect } from 'react-redux'
import TwoLevelPieChart from '../Charts/TwoLevelPieChart'
import { rowHead } from './PortSummaryTable'
import { fullMonth } from '../../utilize/utils'

class PortSummaryChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 0,
      name: rowHead[0]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  chartApplication = (portSummary, productsList) => {
    const data = []
    const products = []
    for(let item in productsList) {
      products.push(productsList[item].name)
    }
    let count = 0
    for(let product in portSummary) {
      let display = 0
      if(count !== 0 && count < products.length) {
        for(let item in portSummary[product]) {
          if(display === parseInt(this.state.display)) {
            data.push({name: products[count], value: portSummary[product][item]})
            break
          }
          display += 1
        }
      }
      count += 1
    }
    return data
  }

  dropDownList = () => {
    const result = []
    for(let i = 0 ; i < rowHead.length - 4 ; i += 1) {
      result.push(
        <option key={`PortSummaryCharts${i}`} value={i}>{rowHead[i]}</option>
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
        <TwoLevelPieChart 
          data={this.chartApplication(this.props.portSummary, this.props.products)}/>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  portSummary: state.portfolio.portSummary,
  products: state.product
})

export default connect(mapStateToProps, null)(PortSummaryChart)