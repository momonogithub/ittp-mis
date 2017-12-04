import { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

class SimpleAreaChart extends Component {
  render() {
    return(
      <AreaChart width={900} height={450} 
      data={this.props.data}
      margin={{top: 20, right: 30, left: 20, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Area type='monotone' dataKey={this.props.dataKey} stroke='#0a71ab' fill='#0a71ab' />
      </AreaChart>
    )
  }
}

export default SimpleAreaChart