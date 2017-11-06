import { Component } from 'react'
import Head from 'next/head'
import DateBar from '../DateBar'
import { CSVLink } from 'react-csv'
import { combineData } from './NetflowContent'
import { connect } from 'react-redux'
import { fetchUpdateNetflow } from '../../reduxModules/netflow'

class NetflowBar extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.fetchUpdateNetflow(this.props.date)
  }
  
  render() {
    return (
      <div>
        <Head><link href="/static/style.css" rel="stylesheet"/></Head>
        <div className="barContentList">
          <div className="barContent">
            <DateBar year={true} month={true}/>
          </div>
          <div className="barContent">
            <CSVLink
              data={combineData(this.props.data, this.props.year, this.props.month)}
              filename={"riskNetflow.csv"}
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
  month: state.date.month,
  year: state.date.year,
  date: state.date,
  data: state.netflow.riskNetflow
})

export default connect(mapStateToProps, { fetchUpdateNetflow })(NetflowBar)