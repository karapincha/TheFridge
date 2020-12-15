const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return { ...state, foodList: action.payload }
    case 'ADD_ITEM':
      return {
        ...state,
        foodList: [action.payload, ...state.foodList],
      }
    default:
      return state
  }
}

export default Reducer
