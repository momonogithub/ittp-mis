import { Component } from 'react'
import DateBar from '../DateBar'
import Head from 'next/head'
import PortType from './PortType'
import { CSVLink } from 'react-csv'
import { combineData } from './PortTotal'
import { connect } from 'react-redux'

class PortTotalBar extends Component {
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
            <PortType page='total'/>
          </div>
          <div className='barContent'>
            <CSVLink
              data={combineData(this.props.data, this.props.year, this.props.month)}
              filename={"portTotal.csv"}
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
  data: state.portfolio.portTotal
})

export default connect(mapStateToProps)(PortTotalBar)
