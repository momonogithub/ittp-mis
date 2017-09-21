export const FETCH_PRODUCTLIST = 'ittp/FETCH_PRODUCTLIST'
export const FETCH_PRODUCTLIST_SUCCESS = 'ittp/FETCH_PRODUCTLIST_SUCCESS'
export const SWITCH_STATUS = 'ittp/SWITCH_STATUS'

export const fetchProductList = () => ({
  type: FETCH_PRODUCTLIST
})

export const switchStatus = (name) => ({
  type: SWITCH_STATUS,
  payload: name
})

const intitalState = []

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTLIST:
    return {
      ...state
    }
    case FETCH_PRODUCTLIST_SUCCESS:
      return action.payload
    case SWITCH_STATUS:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer