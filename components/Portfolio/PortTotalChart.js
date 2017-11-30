import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth, fullMonth } from '../../utilize/utils'
import { connect } from 'react-redux'

class PortTotalChart extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='contentWrapper'>
        this is chart
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