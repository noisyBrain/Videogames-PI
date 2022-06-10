import axios from "axios";
import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_NAME,
  SORT_ALPHABETICALLY,
  FILTER_BY_GENRE,
  GET_ALL_GENRES,
  SORT_BY_RATING,
  FILTER_BY_CREATION,
  GET_DETAIL,
  GET_PLATFORMS,
  SHOW_LOADER,
  HIDE_LOADER,
} from "./actionTypes";


export const showLoader = () => {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADER });
  };
};

export const hideLoader = () => {
  return (dispatch) => {
    dispatch({ type: HIDE_LOADER });
  };
};

export const getAllVideogames = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = (await axios(`http://localhost:3001/videogames`)).data;
    dispatch({ type: GET_ALL_VIDEOGAMES, payload: response });
    dispatch(hideLoader());
  };
};

export const getVideogameByName = (name) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios(`http://localhost:3001/videogames?name=${name}`)
      ).data;
      dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: response });
    } catch (error) {
      console.error(error);
    }
  };
};

export const orderAlphabetically = (payload) => {
  return { type: SORT_ALPHABETICALLY, payload };
};

export const orderByRating = (payload) => {
  return { type: SORT_BY_RATING, payload };
};

export const orderByCreation = (payload) => {
  return { type: FILTER_BY_CREATION, payload };
};

export const getAllGenres = () => {
  return async (dispatch) => {
    try {
      const response = (await axios(`http://localhost:3001/genres`)).data;
      return dispatch({ type: GET_ALL_GENRES, payload: response });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterByGenre = (payload) => {
  return {
    type: FILTER_BY_GENRE,
    payload,
  };
};


export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = (await axios(`http://localhost:3001/videogame/${id}`))
        .data;
      dispatch({ type: GET_DETAIL, payload: response });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    try {
      const response = (await axios(`http://localhost:3001/platforms`)).data;
      dispatch({ type: GET_PLATFORMS, payload: response });
    } catch (error) {
      console.error(error);
    }
  };
};


export const postVideogame = (payload) => {
  return async () => {
    const response = await axios.post(
      "http://localhost:3001/videogame",
      payload
    );
    return response;
  };
};

