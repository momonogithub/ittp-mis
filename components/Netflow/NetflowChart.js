import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth, fixedTwoDecimal } from '../../utilize/utils'
import { connect } from 'react-redux'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const color = [
  "#FF1100",
  "#FFB100",
  "#FFCD00",
  "#D9EC00",
  "#99CB00",
  "#269300",
  "#00EBD8",
  "#00F7FF",
  "#004EFF",
  "#C66CF1",
  "#EE82EE",
  "#FD5BD2",
  "#000000",
]

const getPercent = (value, total) => {
	const ratio = total > 0 ? value / total : 0
  
  return toPercent(ratio, 2)
}

const toPercent = (decimal, fixed = 0) => {
	return `${(decimal * 100).toFixed(fixed)}%`
}

const renderTooltipContent = (o) => {
	const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0)
  
  return (
  	<div className="customized-tooltip-content" style={ { backgroundColor: '#FFFFFF' }}>
    	<p className="total">{`${label} (Total: ${fixedTwoDecimal(total)})`}</p>
      <ul className="list">
      	{
        	payload.map((entry, index) => (
          	<li key={`item-${index}`} style={{color: entry.color}}>
            	{`${entry.name}: ${fixedTwoDecimal(entry.value)} (${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

class NetflowChart extends Component {
  constructor(props) {
    super(props)
  }
  
  chartData = (netflow, month) => {
    const data = []
    let count = month.length - 1
    for(let date in netflow) {
      const chart = {}
      chart.name = month[count]
      for(let i = 1 ; i < netflow[date]['bucket'].length + 1 ; i += 1) {
        chart[`b${i}`] = netflow[date]['bucket'][i - 1]
      }
      count -= 1
      data.push(chart)
    }
    return data
  }

  getArea = () => {
    const areas = []
    for(let i = 1 ; i < 14 ; i += 1) {
      areas.push(
        <Area 
          key={`Area b${i}`} 
          type='monotone' 
          dataKey={`b${i}`} 
          stackId="1" 
          stroke={color[i-1]} 
          fill={color[i-1]} 
        />
      )
    }
    return areas
  }

  render() {
    return (
      <div className='contentWrapper'>
        <AreaChart width={900} height={510} 
          data={this.chartData(this.props.netflow,
            monthToMonth(this.props.year, this.props.month))} 
          stackOffset="expand"
          margin={{top: 40, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis tickFormatter={toPercent}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip content={renderTooltipContent}/>
          {this.getArea()}
        </AreaChart>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  netflow: state.netflow.riskNetflow
})

export default connect(mapStateToProps, null)(NetflowChart)