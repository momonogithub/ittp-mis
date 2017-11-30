import Head from 'next/head'
import Router from 'next/router'
import { Component } from 'react'

class Display extends Component {
  constructor(props) {
    super(props)
  }

  changePage = (event) => Router.push(
    `${this.props.pathname}?page=${this.props.page}&display=${event.target.value}`,
    `${this.props.pathname}${this.props.page}${event.target.value}`)
  
  render() {
    return (
      <div className='inform'>
        <label>Display</label>
        <div className='infield'>
          <select defaultValue={this.props.display} onChange={this.changePage}>
            <option disabled>Display data as</option>
            <option value='/chart'>Chart</option>
            <option value='/table'>Table</option>
          </select>
        </div>
      </div>
    )
  }
}
export default Display