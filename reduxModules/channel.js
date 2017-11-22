export const FETCH_CHANNEL = 'ittp/FETCH_CHANNEL'
export const FETCH_CHANNEL_SUCCESS = 'ittp/FETCH_CHANNEL_SUCCESS'
export const FETCH_UPDATE_CHANNEL = 'ittp/FETCH_UPDATE_CHANNEL'

export const fetchChannel = date => ({
  type: FETCH_CHANNEL,
  payload: date,
})

export const fetchUpdateChannel = date => ({
  type: FETCH_UPDATE_CHANNEL,
  payload: date,
})

const intitalState = {}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_CHANNEL_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default reducer