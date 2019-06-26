import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions'

const initialState = {
  characters: [],
  fetching: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload,
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    default:
      return state;
  }
};
