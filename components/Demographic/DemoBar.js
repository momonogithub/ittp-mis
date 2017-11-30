import { Component } from 'react'
import DateBar from '../DateBar'
import Head from 'next/head'
import DemoCheckbox from './DemoCheckbox'
import { combineData } from './DemoContent'
import { CSVLink } from 'react-csv'
import { connect } from 'react-redux'
import { fetchUpdateDemographic } from '../../reduxModules/demographic'
import { switchLoadingStatus } from '../../reduxModules/loading'

class DemographicBar extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.fetchUpdateDemographic(this.props.date)
    this.props.switchLoadingStatus()
  }
  
  render() {
    return (
      <div className='sideBarContent'>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <div className='barContentList'>
          <div className='barContent'>
            <DateBar year={true} month={true}/>
          </div>
          <div className='barContent'>
            <CSVLink
              data={combineData(this.props.data)}
              filename={`demographic${this.props.year}-${this.props.month}.csv`}
            >
              <button className="button download">Download Excel</button>
            </CSVLink>
          </div>
          <div className='barContent'>
            <button className="button update" onClick={this.handleClick}>Update Data</button>
          </div>
        </div>
        <div className='barContentList'>
          <DemoCheckbox/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  month: state.date.month,
  year: state.date.year,
  date: state.date,
  data: state.demographic.demographic
})

export default connect(mapStateToProps, { fetchUpdateDemographic, switchLoadingStatus } )(DemographicBar)