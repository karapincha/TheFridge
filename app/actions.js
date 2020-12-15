/*
 * Fetch all the items from API
 */
export const fetchItems = async dispatch => {
  const response = await fetch(`/api/get-items`)
  const jsonResponse = await response.json()
  dispatch({ type: 'LOAD_ITEMS', payload: jsonResponse.items })
}

/*
 * POST new item to API
 */
export const addItem = async (item, dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  }

  const response = await fetch(`/api/add-item`, requestOptions)
  const jsonResponse = await response.json()

  if (!jsonResponse.error) {
    dispatch({ type: 'LOAD_ITEMS', payload: jsonResponse.items })
    return { message: 'success' }
  } else {
    return { message: 'error', error: jsonResponse.error }
  }
}
