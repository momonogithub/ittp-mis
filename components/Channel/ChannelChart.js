import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth, fullMonth } from '../../utilize/utils'
import { connect } from 'react-redux'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class ChannelChart extends Component {
  constructor(props) {
    super(props)
  }
  
  chartData = (channel, month) => {
    const data = []
    let count = month.length - 1
    for(let date in channel) {
      let application = 0, approved = 0
      for(let code in channel[date]) {
        application += channel[date][code].Application
        approved += channel[date][code].Approved
      }
      data.push({
        name: month[count],
        Application: application,
        Approved: approved
      })
      count -= 1
    }
    return data
  }

  render() {
    return (
      <div className='contentWrapper'>
        <BarChart width={900} height={500} 
          data={this.chartData(this.props.channel ,
            monthToMonth(this.props.year, this.props.month))}
          margin={{top: 40, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="Application" fill="#0A71AB" />
          <Bar dataKey="Approved" fill="#7CFC00" />
        </BarChart>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  channel: state.channel
})

export default connect(mapStateToProps, null)(ChannelChart)