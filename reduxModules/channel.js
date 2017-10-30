export const FETCH_CHANNEL = 'ittp/FETCH_CHANNEL'
export const FETCH_CHANNEL_SUCCESS = 'ittp/FETCH_CHANNEL_SUCCESS'

export const fetchChannel = date => ({
  type: FETCH_CHANNEL,
  payload: date,
})

const intitalState = {}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_CHANNEL:
      return {
        ...state
      }
    case FETCH_CHANNEL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default reducer