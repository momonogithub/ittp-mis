import React, { Component } from 'react'
import Router from 'next/router'
import Cookies from 'universal-cookie'

const requireAuth = (Component) => {
  return class extends Component {
    render() {
      return <Component {...this.props} />
    }
    static async getInitialProps({ req, res }) {
      let cookies, token
      // Render from server
      if (req) {
        cookies = new Cookies(req.headers.cookie)
        token = cookies.get('accessToken')      
        if (token === undefined) {
          res.redirect('/')
        }
      }
      // Render from browser
      else {
        cookies = new Cookies()
        token = cookies.get('accessToken')
        if (token === undefined) {
          Router.push('/')          
        }
      }
    }
  }
}

export default requireAuth