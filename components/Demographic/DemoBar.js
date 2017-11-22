import { Component } from 'react'
import DateBar from '../DateBar'
import Head from 'next/head'
import DemoCheckbox from './DemoCheckbox'
import { combineData } from './DemoContent'
import { CSVLink } from 'react-csv'
import { connect } from 'react-redux'

class DemographicBar extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
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
  data: state.demographic.demographic
})

export default connect(mapStateToProps, null )(DemographicBar)