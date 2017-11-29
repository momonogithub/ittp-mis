import Head from 'next/head'
import Router from 'next/router'
import { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../reduxModules/auth'

class HeaderBar extends Component {
  constructor(props) {
    super(props)
  }
  
  handleClick = event => {
    this.props.logout()
    Router.push({ pathname: '/' })
  }

  render() {
    return (
      <div className='headerBar'>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <img className='imgDiv' src='/static/ittp-icon.jpg'/>
        <div className='headerTitle'>
            <div className='titleStyle'>
                <label>{this.props.title}</label>
            </div>
          </div>
        <button className='button logout' onClick={this.handleClick}>Logout</button>
      </div>
    )
  }
}

export default connect(null, { logout })(HeaderBar)