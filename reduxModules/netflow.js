export const FETCH_RISK_NETFLOW = 'ittp/FETCH_RISK_NETFLOW'
export const FETCH_RISK_NETFLOW_SUCCESS = 'ittp/FETCH_RISK_NETFLOW_SUCCESS'

export const fetchRiskNetflow = date => ({
  type: FETCH_RISK_NETFLOW,
  payload: date,
})

const intitalState = {
  riskNetflow: {},
}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_RISK_NETFLOW:
      return {
        ...state
      }
    case FETCH_RISK_NETFLOW_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        riskNetflow: action.payload
      }
    default:
      return state
  }
}

export default reducer