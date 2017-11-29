import Link from 'next/link'
import Head from 'next/head'
import { Component } from 'react'

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const path = this.props.pathname
    return(
      <div className='sidebar'>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <Link as='/portfolio' href="/portfolio?page=summary">
          <div className={path ==='/portfolio'? 'sideItem is-active': 'sideItem' }>
            Portfolio
          </div>
        </Link>
        <Link href="/channel">
          <div className={path ==='/channel'? 'sideItem is-active': 'sideItem' }>
            Channel
          </div>
        </Link>
        <Link href="/demographic">
          <div className={path ==='/demographic'? 'sideItem is-active': 'sideItem' }>
            Demographic
          </div>
        </Link>
        <Link href="/netflow">
          <div className={path ==='/netflow'? 'sideItem is-active': 'sideItem' }>
            Netflow
          </div>
        </Link>
      </div>
    )
  }
}

export default Sidebar