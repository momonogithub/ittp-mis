export const FETCH_NETFLOW = 'ittp/FETCH_NETFLOW'
export const FETCH_UPDATE_NETFLOW = 'ittp/FETCH_UPDATE_NETFLOW'
export const FETCH_NETFLOW_SUCCESS = 'ittp/FETCH_NETFLOW_SUCCESS'
export const FETCH_NETFLOW_FAILED = 'ittp/FETCH_NETFLOW_FAILED'

export const fetchNetflow = date => ({
  type: FETCH_NETFLOW,
  payload: date,
})

export const fetchUpdateNetflow = date => ({
  type: FETCH_UPDATE_NETFLOW,
  payload: date,
})

const intitalState = {
  riskNetflow: {},
}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_NETFLOW_SUCCESS:
      return {
        ...state,
        riskNetflow: action.payload
      }
    default:
      return state
  }
}

export default reducer