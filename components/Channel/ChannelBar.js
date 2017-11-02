import { Component } from 'react'
import { connect } from 'react-redux'
import { combineData } from './ChannelContent'
import { CSVLink } from 'react-csv'
import { monthToMonth } from '../../utilize/utils'
import Head from 'next/head'
import DateBar from '../DateBar'
import WayCodeCheckBox from '../WayCodeCheckbox'

class ChannelBar extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const monthArr = monthToMonth(this.props.year,this.props.month)
    return (
      <div>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <div className='barContentList'>
          <div className='barContent'>
            <DateBar year={true} month={true}/>
          </div>
          <div className='barContent'>
            <CSVLink
                data={combineData(this.props.channel, this.props.wayCodes, monthArr)}
                filename={`Channel.csv`}
              >
                <button className="button download">Download Excel</button>
              </CSVLink>
          </div>
        </div>
        <div className='barContentList'>
          <div className='barContent'>
            <label>ByWayCode:</label>
            <WayCodeCheckBox/>
          </div>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  channel: state.channel,
  wayCodes: state.wayCode
})

export default connect(mapStateToProps, null)(ChannelBar)