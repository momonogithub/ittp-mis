export const FETCH_WAYCODE = 'ittp/FETCH_WAYCODE'
export const FETCH_WAYCODE_SUCCESS = 'ittp/FETCH_WAYCODE_SUCCESS'
export const SWITCH_WAYCODE_STATUS = 'ittp/SWITCH_WAYCODE_STATUS'

export const fetchWayCode = () => ({
  type: FETCH_WAYCODE
})

export const switchWayCodeStatus = (id) => ({
  type: SWITCH_WAYCODE_STATUS,
  payload: id.target.value
})

const intitalState = {}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_WAYCODE:
    return {
      ...state
    }
    case FETCH_WAYCODE_SUCCESS: {
      return action.payload
    }
    case SWITCH_WAYCODE_STATUS: {
      const name = state[action.payload].name
      const status = !state[action.payload].status
      return {
        ...state,
        [action.payload]: { name, status }
      } 
    }
    default:
      return state
  }
}

export default reducer