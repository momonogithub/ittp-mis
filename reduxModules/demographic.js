export const FETCH_DEMOGRAPHIC = 'ittp/FETCH_DEMOGRAPHIC'
export const FETCH_DEMOGRAPHIC_SUCCESS = 'ittp/FETCH_DEMOGRAPHIC_SUCCESS'
export const FETCH_DEMOLIST = 'ittp/FETCH_DEMOLIST'
export const FETCH_DEMOLIST_SUCCESS = 'ittp/FETCH_DEMOLIST_SUCCESS'
export const SWITCH_DEMO_STATUS = 'ittp/SWITCH_DEMO_STATUS'

export const fetchDemographic = date => ({
  type: FETCH_DEMOGRAPHIC,
  payload: date,
})

export const fetchDemoList = () => ({
  type: FETCH_DEMOLIST
})

export const switchDemoStatus = key => ({
  type: SWITCH_DEMO_STATUS,
  payload: key.target.value
})

const intitalState = {
  demographic : {},
  demoList : {}
}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_DEMOGRAPHIC:
      return {
        ...state
      }
    case FETCH_DEMOGRAPHIC_SUCCESS:
      return {
        ...state,
        demographic: action.payload
      }
    case FETCH_DEMOLIST:
      return {
        ...state
      }
    case FETCH_DEMOLIST_SUCCESS: {
        return {
          ...state,
          demoList: action.payload
        }
      }
    case SWITCH_DEMO_STATUS: {
      const name = action.payload
      const status = !state['demoList'][action.payload].status
      console.log(status)
        return {
          ...state,
          demoList: {
            ...state['demoList'],
            [name]: {status}
          }
        } 
      }
    default:
      return state
  }
}

export default reducer