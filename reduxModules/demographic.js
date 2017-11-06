export const FETCH_DEMOGRAPHIC = 'ittp/FETCH_DEMOGRAPHIC'
export const FETCH_DEMOGRAPHIC_SUCCESS = 'ittp/FETCH_DEMOGRAPHIC_SUCCESS'

export const fetchDemographic = date => ({
  type: FETCH_DEMOGRAPHIC,
  payload: date,
})

const intitalState = {}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_DEMOGRAPHIC:
      return {
        ...state
      }
    case FETCH_DEMOGRAPHIC_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default reducer