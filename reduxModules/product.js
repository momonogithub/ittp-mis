export const FETCH_PRODUCTLIST = 'ittp/FETCH_PRODUCTLIST'
export const FETCH_PRODUCTLIST_SUCCESS = 'ittp/FETCH_PRODUCTLIST_SUCCESS'
export const SWITCH_STATUS = 'ittp/SWITCH_STATUS'

export const fetchProductList = () => ({
  type: FETCH_PRODUCTLIST
})

export const switchStatus = (id) => ({
  type: SWITCH_STATUS,
  payload: id.target.value
})

const intitalState = []

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTLIST:
    return {
      ...state
    }
    case FETCH_PRODUCTLIST_SUCCESS: {
      const product = action.payload.reduce((pre, { id, name, status }) => ({ ...pre, [id]: { name, status } }), {})
      return product
    }
    case SWITCH_STATUS: {
      return {
        ...state
      } 
    }
    default:
      return state
  }
}

export default reducer