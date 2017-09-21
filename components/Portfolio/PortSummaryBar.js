import { Component } from 'react'
import DateBar from '../DateBar'
import Head from 'next/head'
import ProductCheckbox from '../ProductCheckbox'
import PortType from './PortType'
import { connect } from 'react-redux'

class PortSummaryBar extends Component {
  render() {
    return (
      <div>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <div className='barContentList'>
          <div className='barContent'>
            <DateBar year={true} month={true}/>
            <PortType page='summary'/>
          </div>
          <div className='barContent'>
            <button className='downloadButton'>Download Excel</button>
          </div>
        </div>
        <div className='barContentList'>
          <div className='barContent'>
            <label>ByProduct:</label>
            <ProductCheckbox/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  product: state.product
})

export default connect(mapStateToProps, null)(PortSummaryBar)