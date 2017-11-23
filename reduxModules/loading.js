export const SWITCH_LOADING_STATUS = 'ittp/SWITCH_LOADING_STATUS'

export const switchLoadingStatus = () => ({
  type: SWITCH_LOADING_STATUS,
})

const intitalState = {
  status: false,
}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case SWITCH_LOADING_STATUS:
    return {
        status: !state.status ,
      }
    default:
      return state
  }
}

export default reducer