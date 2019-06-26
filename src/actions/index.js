// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchData = () => async dispatch => {
  dispatch({ type: FETCH_DATA_START })
  try {
    const { data } = await axios.get('https://swapi.co/api/people/')
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: data.results,
    })
  } catch (err) {
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload: err.message,
    })
  }
}
