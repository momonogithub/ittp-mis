import { Component } from 'react'
import DateBar from '../DateBar'
import Head from 'next/head'
import ProductCheckbox from '../ProductCheckbox'
import PortType from './PortType'
import { combineData } from './PortSummary'
import { connect } from 'react-redux'
import { CSVLink } from 'react-csv'
import { fetchUpdatePortSummary } from '../../reduxModules/portfolio'
import { switchLoadingStatus } from '../../reduxModules/loading'

class PortSummaryBar extends Component {
  constructor(props) {
    super(props)
  }
  
  getProductList = (products) => {
    const result = ['Total']
    for (let item in products) {
      result.push(products[item].name)
    }
    return result
  }

  handleClick = () => {
    this.props.fetchUpdatePortSummary(this.props.date)
    this.props.switchLoadingStatus()
  }

  render() {
    const products = this.getProductList(this.props.products)
    return (
      <div>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <div className='barContentList'>
          <div className='barContent'>
            <DateBar year={true} month={true}/>
            <PortType page='summary'/>
          </div>
          <div className='barContent'>
            <CSVLink
              data={combineData(this.props.data, products)}
              filename={`portSummary${this.props.date.year}-${this.props.date.month}.csv`}
            >
              <button className="button download">Download Excel</button>
            </CSVLink>
          </div>
          <div className='barContent'>
            <button className="button update" onClick={this.handleClick}>Update Data</button>
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
  date: state.date,
  products: state.product,
  data: state.portfolio.portSummary
})

export default connect(mapStateToProps, { fetchUpdatePortSummary, switchLoadingStatus })(PortSummaryBar)