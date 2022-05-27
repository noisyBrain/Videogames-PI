import { GET_ALL_VIDEOGAMES } from './actionTypes';

export const getAllVideogames = () => {
  return async (dispatch) => {
    return fetch(`http://localhost:3001/videogames`)
      .then(response => response.json())
      .then(data => dispatch({type: GET_ALL_VIDEOGAMES, payload: data}))
      .catch(error => console.error(error))
  }
}
