export const FETCH_PORTTOTAL = 'ittp/FETCH_PORTTOTAL'
export const FETCH_PORTTOTAL_SUCCESS = 'ittp/FETCH_PORTTOTAL_SUCCESS'
export const FETCH_PORTTOTAL_FAILED = 'ittp/FETCH_PORTTOTAL_FAILED'
export const FETCH_UPDATE_PORTTOTAL = 'ittp/FETCH_UPDATE_PORTTOTAL'
export const FETCH_PORTSUMMARY = 'ittp/FETCH_PORTSUMMARY'
export const FETCH_PORTSUMMARY_SUCCESS = 'ittp/FETCH_PORTSUMMARY_SUCCESS'
export const FETCH_PORTSUMMARY_FAILED = 'ittp/FETCH_PORTSUMMARY_FAILED'
export const FETCH_UPDATE_PORTSUMMARY = 'ittp/FETCH_UPDATE_PORTSUMMARY'

export const fetchPortSummary = date => ({
  type: FETCH_PORTSUMMARY,
  payload: date
})

export const fetchPortTotal = date => ({
  type: FETCH_PORTTOTAL,
  payload: date
})

export const fetchUpdatePortSummary = date => ({
  type: FETCH_UPDATE_PORTSUMMARY,
  payload: date
})

export const fetchUpdatePortTotal = date => ({
  type: FETCH_UPDATE_PORTTOTAL,
  payload: date
})

const intitalState = {
  portSummary: {},
  portTotal: {},
}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_PORTTOTAL_SUCCESS:
      return {
        ...state,
        portTotal: action.payload
      }
    case FETCH_PORTSUMMARY_SUCCESS:
      return {
        ...state,
        portSummary: action.payload
      }
    default:
      return state
  }
}

export default reducer