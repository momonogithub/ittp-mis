import Head from 'next/head'
import Router from 'next/router'
import { Component } from 'react'

class PortType extends Component {
  constructor(props) {
    super(props)
  }

  changePage = (event) => Router.push(
    `/portfolio?page=${event.target.value}&display=${this.props.display}`,
    `/portfolio${event.target.value}${this.props.display}`)
  
  render() {
    return (
      <div className='inform'>
        <label>Type</label>
        <div className='infield'>
          <select defaultValue={this.props.page} onChange={this.changePage}>
            <option value='/portSummary'>Summary Page</option>
            <option value='/portTotal'>Total Product</option>
          </select>
        </div>
      </div>
    )
  }
}
export default PortType