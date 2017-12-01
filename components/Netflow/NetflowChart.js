import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth, fixedTwoDecimal } from '../../utilize/utils'
import { connect } from 'react-redux'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

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
          <Area type='monotone' dataKey='b1' stackId="1" stroke="#FF1100" fill="#FF1100" />
          <Area type='monotone' dataKey='b2' stackId="1" stroke="#FFB100" fill="#FFB100" />
          <Area type='monotone' dataKey='b3' stackId="1" stroke="#FFCD00" fill="#FFCD00" />
          <Area type='monotone' dataKey='b4' stackId="1" stroke="#D9EC00" fill="#D9EC00" />
          <Area type='monotone' dataKey='b5' stackId="1" stroke="#99CB00" fill="#99CB00" />
          <Area type='monotone' dataKey='b6' stackId="1" stroke="#269300" fill="#269300" />
          <Area type='monotone' dataKey='b7' stackId="1" stroke="#00EBD8" fill="#00EBD8" />
          <Area type='monotone' dataKey='b8' stackId="1" stroke="#00F7FF" fill="#00F7FF" />
          <Area type='monotone' dataKey='b9' stackId="1" stroke="#004EFF" fill="#004EFF" />
          <Area type='monotone' dataKey='b10' stackId="1" stroke="#C66CF1" fill="#C66CF1" />
          <Area type='monotone' dataKey='b11' stackId="1" stroke="#EE82EE" fill="#EE82EE" />
          <Area type='monotone' dataKey='b12' stackId="1" stroke="#FD5BD2" fill="#FD5BD2" />
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