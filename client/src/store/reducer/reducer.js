import { GET_ALL_VIDEOGAMES } from '../actions/actionTypes';

const initialState = {
  videogames: [],
  previous: '',
  next: ''
}

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
      }
    default:
      return {
        ...state
      }
  }
}