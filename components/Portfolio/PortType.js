import Head from 'next/head'
import Router from 'next/router'
import { Component } from 'react'

class PortType extends Component {
  constructor(props) {
    super(props)
  }

  changePage = (event) => Router.push({
    pathname: '/portfolio',
    query: { page: `${event.target.value}` }
  })
  
  render() {
    return (
      <div className='inform'>
        <label>Type</label>
        <div className='infield'>
          <select defaultValue={this.props.page} onChange={this.changePage}>
            <option value='summary'>Summary Page</option>
            <option value='total'>Total Product</option>
          </select>
        </div>
      </div>
    )
  }
}
export default PortType