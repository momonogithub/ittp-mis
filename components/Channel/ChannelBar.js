import { Component } from 'react'
import { connect } from 'react-redux'
import { combineData } from './ChannelTable'
import { CSVLink } from 'react-csv'
import Display from '../Display'
import { monthToMonth } from '../../utilize/utils'
import Head from 'next/head'
import DateBar from '../DateBar'
import WayCodeCheckBox from '../WayCodeCheckbox'
import { fetchUpdateChannel } from '../../reduxModules/channel'
import { switchLoadingStatus } from '../../reduxModules/loading'

class ChannelBar extends Component {
  constructor(props) {
    super(props)
  }
  
  handleClick = () => {
    this.props.fetchUpdateChannel(this.props.date)
    this.props.switchLoadingStatus()
  }
  
  render() {
    const monthArr = monthToMonth(this.props.year,this.props.month)
    return (
      <div className='sideBarContent'>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <div className='barContentList'>
          <div className='barContent'>
            <DateBar year={true} month={true}/>
            <Display pathname={this.props.pathname} page='' display={this.props.query.display}/>
          </div>
          <div className='barContent'>
            <CSVLink
                data={combineData(this.props.channel, this.props.wayCodes, monthArr)}
                filename={`Channel.csv`}
              >
                <button className="button download">Download Excel</button>
              </CSVLink>
          </div>
          <div className='barContent'>
            <button className="button update" onClick={this.handleClick}>Update Data</button>
          </div>
        </div>
        <div className='barContentList'>
          <div 
            className={ this.props.query.display === '/table' ? 
              'barContent' : 'hidden'}
          >
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
  date: state.date,
  channel: state.channel,
  wayCodes: state.wayCode
})

export default connect(mapStateToProps, { fetchUpdateChannel, switchLoadingStatus })(ChannelBar)