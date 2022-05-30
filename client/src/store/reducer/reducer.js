import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ORDER_BY_GENRE, ORDER_ALPHABETICALY } from '../actions/actionTypes';

const initialState = {
  videogames: [],
  genres: [],
}

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
      }
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: payload,
      }
    case ORDER_ALPHABETICALY:
      return {
        ...state,
        videogames: payload.sort( (a,b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1
          return 0
        })
      }
    case ORDER_BY_GENRE:
      return {
        ...state,
        genres: payload,
      }
    default:
      return {
        ...state
      }
  }
}