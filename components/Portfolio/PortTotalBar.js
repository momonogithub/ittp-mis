import { Component } from 'react'
import DateBar from '../DateBar'
import Display from '../Display'
import Head from 'next/head'
import PortType from './PortType'
import { CSVLink } from 'react-csv'
import { combineData } from './PortTotalTable'
import { connect } from 'react-redux'
import { fetchUpdatePortTotal } from '../../reduxModules/portfolio'
import { switchLoadingStatus } from '../../reduxModules/loading'

class PortTotalBar extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.fetchUpdatePortTotal(this.props.date)
    this.props.switchLoadingStatus()
  }

  render() {
    return (
      <div className='sideBarContent'>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <div className='barContentList'>
          <div className='barContent'>
            <DateBar year={true} month={true}/>
            <PortType page='/portTotal' display={this.props.query.display}/>
            <Display pathname={this.props.pathname} page='/portTotal' display={this.props.query.display}/>
          </div>
          <div className='barContent'>
            <CSVLink
              data={combineData(this.props.data, this.props.year, this.props.month)}
              filename={"portTotal.csv"}
            >
              <button className="button download">Download Excel</button>
            </CSVLink>
          </div>
          <div className='barContent'>
            <button className="button update" onClick={this.handleClick}>Update Data</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  date: state.date,
  month: state.date.month,
  year: state.date.year, 
  data: state.portfolio.portTotal
})

export default connect(mapStateToProps, { fetchUpdatePortTotal, switchLoadingStatus })(PortTotalBar)
