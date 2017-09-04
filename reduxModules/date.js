export const SET_MONTH = 'SET_MONTH'
export const SET_YEAR = 'SET_YEAR'

const initialState = {
  month: 0,
  year: 0,
}

export const setMonth = month => ({
  type: SET_MONTH,
  payload: month,
})

export const setYear = year => ({
  type: SET_YEAR,
  payload: year,
})

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONTH: {
      return {
        ...state,
        month: action.payload
      }
    }
    case SET_YEAR: {
      return {
        ...state,
        year: action.payload
      }
    }
    default:
      return state
  }
} 

export default dateReducer