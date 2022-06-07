import { 
  GET_ALL_VIDEOGAMES, 
  GET_VIDEOGAME_BY_NAME, 
  FILTER_BY_GENRE, 
  ORDER_ALPHABETICALLY, 
  GET_ALL_GENRES, 
  ORDER_BY_RATING, 
  ORDER_BY_CREATION, 
  GET_DETAIL,
  GET_PLATFORMS,
  POST_VIDEOGAME,
  SHOW_LOADER,
  HIDE_LOADER,
} from '../actions/actionTypes';

const initialState = {
  allVideogames: [],
  videogames: [],
  detail: {},
  genres: [],
  platforms: [],
  loading: false,
}

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        allVideogames: payload,
      }
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: payload,
      }

    case ORDER_ALPHABETICALLY:
      const orderAlphabetically = payload === "Alphabetically" ? state.allVideogames :

      payload === 'Ascending' ?
      state.videogames.sort( (a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0) 
      :
      state.videogames.sort( (a,b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0)

      return {
        ...state,
        videogames: orderAlphabetically,
      }

    case ORDER_BY_RATING:

      const orderRating = payload === "Rating" ? state.allVideogames :

        payload === "Ascending" ?
        state.videogames.sort( (a,b) => a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0)
        :
        state.videogames.sort( (a,b) => a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0)
        
      return {
        ...state,
        videogames: orderRating,
      }
    
    case ORDER_BY_CREATION:
      const orderCreation = payload === "Created" ? state.allVideogames.filter(v => v.createdBy)
      :
      state.allVideogames.filter(v => !v.createdBy)

      return {
        ...state,
        videogames: orderCreation,
      }

    case GET_ALL_GENRES:
      return {
        ...state,
        genres: payload
      }

    case FILTER_BY_GENRE:

      const allVideogames = state.allVideogames
      const filteredByGenre = payload === "Genres" ? allVideogames : allVideogames?.filter(el => el.genres && (el.genres).includes(payload))

      return {
        ...state,
        videogames: filteredByGenre,
        // consola: console.log("filteredByGenre (reducer) -> ", filteredByGenre)
      }
    
    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      }
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: payload,
      }
    case POST_VIDEOGAME:
      return {
        ...state,
      }
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
        // consola: console.log("loading show loader -> ", state.loading)
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
        // consola: console.log("loading hide loader -> ", state.loading)
      }
    default:
      return {
        ...state
      }
  }
}