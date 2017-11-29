import Head from 'next/head'
import Router from 'next/router'
import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import Spinner from '../components/Spinner'
import { configureStore } from '../store'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { login } from '../reduxModules/auth'
import requireAuth from '../hoc/requireAuth'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.displayError = this.displayError.bind(this)
  }
  
  handleSubmit(event) {
    this.props.login(this.state.username, this.state.password)
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  displayError = message => {
    if(message !== undefined) {
      return `*${message}`
    } else {
      return message
    }
  }

  render() {
    if(this.props.accessToken !== undefined) {
      Router.push({
        pathname: '/portfolio',
        query: { page: `summary` }
      })
    }
    return(
      <div className='wrapper'>
      <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <div className='loginDiv'>
          <label className='loginLabel'>ITTP MIS Login</label>
          <form onSubmit={this.handleSubmit}>
            <div className='inform'>
              <h4>Username</h4>
              <div className='infield'>
                <input 
                  name='username'
                  type='text'
                  value={this.state.username}
                  onChange={this.handleChange}>
                </input>
              </div>
            </div> 
            <div className='inform'>
              <h4>Password</h4>
              <div className='infield'>
                <input 
                  name='password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange}>
                </input>
              </div>
            </div>
            <div className ='barContent'>
              <button type="submit" className="button update">login</button>
            </div>
            <div className ='barContent'>
              <label className='errorLabel'>{this.displayError(this.props.msg)}</label>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.authentication.accessToken,
  msg: state.authentication.msg
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Index)