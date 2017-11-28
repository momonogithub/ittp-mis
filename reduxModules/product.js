export const FETCH_PRODUCTLIST = 'ittp/FETCH_PRODUCTLIST'
export const FETCH_PRODUCTLIST_SUCCESS = 'ittp/FETCH_PRODUCTLIST_SUCCESS'
export const FETCH_PRODUCTLIST_FAILED = 'ittp/FETCH_PRODUCTLIST_FAILED'
export const SWITCH_PRODUCT_STATUS = 'ittp/SWITCH_PRODUCT_STATUS'

export const fetchProductList = () => ({
  type: FETCH_PRODUCTLIST
})

export const switchProductStatus = (id) => ({
  type: SWITCH_PRODUCT_STATUS,
  payload: id.target.value
})

const intitalState = {}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTLIST:
    return {
      ...state
    }
    case FETCH_PRODUCTLIST_SUCCESS: {
      return action.payload
    }
    case SWITCH_PRODUCT_STATUS: {
      const name = state[action.payload].name
      const status = !state[action.payload].status
      return {
        ...state,
        [action.payload]: { name, status }
      } 
    }
    default:
      return state
  }
}

export default reducer