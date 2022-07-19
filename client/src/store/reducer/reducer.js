import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_NAME,
  FILTER_BY_GENRE,
  SORT_ALPHABETICALLY,
  GET_ALL_GENRES,
  SORT_BY_RATING,
  FILTER_BY_CREATION,
  GET_DETAIL,
  GET_PLATFORMS,
  POST_VIDEOGAME,
  SHOW_LOADER,
  HIDE_LOADER,
  PROMEDIO_RATING,
} from "../actions/actionTypes";

const initialState = {
  allVideogames: [],
  videogames: [],
  detail: {},
  genres: [],
  platforms: [],
  loading: false,
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        allVideogames: payload,
      };
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: payload,
      };

    case SORT_ALPHABETICALLY:
      const orderAlphabetically =
        payload === "Alphabetically"
          ? state.allVideogames
          : payload === "Ascending"
          ? state.videogames.sort((a, b) =>
              a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            )
          : state.videogames.sort((a, b) =>
              a.name > b.name ? -1 : a.name < b.name ? 1 : 0
            );

      return {
        ...state,
        videogames: orderAlphabetically,
      };

    case SORT_BY_RATING:
      const orderRating =
        payload === "Rating"
          ? state.allVideogames
          : payload === "Ascending"
          ? state.videogames.sort((a, b) =>
              a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0
            )
          : state.videogames.sort((a, b) =>
              a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
            );

      return {
        ...state,
        videogames: orderRating,
      };

    case FILTER_BY_CREATION:
      const filteredByCreation =
        payload === "Created"
          ? state.allVideogames.filter((v) => v.createdBy)
          : state.allVideogames.filter((v) => !v.createdBy);

      return {
        ...state,
        videogames: filteredByCreation,
      };

    case GET_ALL_GENRES:
      return {
        ...state,
        genres: payload,
      };

    case FILTER_BY_GENRE:
      const allVideogames = state.allVideogames;
      const filteredByGenre =
        payload === "Genres"
          ? allVideogames
          : allVideogames?.filter(
              (el) => el.genres && el.genres.includes(payload)
            );

      return {
        ...state,
        videogames: filteredByGenre,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: payload,
      };
    case POST_VIDEOGAME:
      return {
        ...state,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    
    case PROMEDIO_RATING:
      const todosVideojuegos = state.allVideogames;
      const filtrosGeneros = payload === "RPG" && todosVideojuegos.filter((el) => el.genres && el.genres.includes(payload))

      return {
        ...state,
        videogames: filtrosGeneros,
      }


    default:
      return {
        ...state,
      };
  }
}
