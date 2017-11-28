import Cookies from 'universal-cookie'

export const LOGIN = 'ittp/LOGIN'
export const LOGIN_SUCCESS = 'ittp/LOGIN_SUCCESS'
export const LOGIN_FAILED = 'ittp/LOGIN_FAILED'
export const LOGOUT = 'ittp/LOGOUT'

const initialState = {
  msg: ''
}

export const logout = () => ({
  type: LOGOUT
})

export const login = (username, password) => ({
  type: LOGIN,
  payload: {
    name: username,
    password: password
  }
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const cookies = new Cookies()
      cookies.set('accessToken', action.payload)
      return {
        ...state,
        accessToken: action.payload
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        msg: action.payload
      }
    }
    case LOGOUT: 
      const cookies = new Cookies()
      cookies.remove('accessToken')
      return {
        ...state,
        accessToken: undefined
      }
      break
    default:
      return state
  }
} 

export default reducer