import Head from 'next/head'
import { Component } from 'react'

class HeaderBar extends Component {
  constructor(props) {
    super(props)
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
        <button className='button logout'>
          <label>Logout</label>
        </button>
      </div>
    )
  }
}

export default HeaderBar