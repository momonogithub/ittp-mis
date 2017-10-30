import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth, createColHead, fullMonth } from '../../utilize/utils'
import { connect } from 'react-redux'

class ChannelContent extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <table>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <tbody>
          <tr className='spanRow'>
            <td className='headTable' colSpan='14'>
              Acquistion as {fullMonth[this.props.month - 1]} {this.props.year}
            </td>
          </tr>
          <tr>
            <th></th>
            {createColHead(monthToMonth(this.props.year,this.props.month))}
          </tr>
        </tbody> 
      </table>
    )
  }
}

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year
})

export default connect(mapStateToProps, null)(ChannelContent)