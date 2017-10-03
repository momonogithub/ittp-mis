export const FETCH_PORTTOTAL = 'ittp/FETCH_PORTTOTAL'
export const FETCH_PORTTOTAL_SUCCESS = 'ittp/FETCH_PORTTOTAL_SUCCESS'
export const FETCH_UPDATE_PORTTOTAL = 'ittp/FETCH_UPDATE_PORTTOTAL'

export const fetchPortTotal = date => ({
  type: FETCH_PORTTOTAL,
  payload: date
})

export const fetchUpdatePortTotal = date => ({
  type: FETCH_UPDATE_PORTTOTAL,
  payload: date
})

const intitalState = {
  portTotal: {},
}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_PORTTOTAL:
      return {
        ...state
      }
    case FETCH_UPDATE_PORTTOTAL:
      return {
        ...state
      }
    case FETCH_PORTTOTAL_SUCCESS:
      return {
        ...state,
        portTotal: action.payload
      }
    default:
      return state
  }
}

export default reducer