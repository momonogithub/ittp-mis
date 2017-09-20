import { Component } from 'react'
import Head from 'next/head'
import DateBar from '../DateBar'
import { CSVLink } from 'react-csv'
import { combineData } from './NetflowContent'
import { connect } from 'react-redux'

class NetflowBar extends Component {
  constructor(props) {
    super(props)
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
              <button className="downloadButton">Download Excel</button>
            </CSVLink>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  month: state.date.month,
  year: state.date.year, 
  data: state.netflow.riskNetflow
})

export default connect(mapStateToProps)(NetflowBar)