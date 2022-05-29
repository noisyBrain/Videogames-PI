import axios from 'axios';
import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ORDER_BY_GENRE } from './actionTypes';

export const getAllVideogames = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/videogames`)
      .then(response => response.json())
      .then(data => dispatch({type: GET_ALL_VIDEOGAMES, payload: data}))
      .catch(error => console.error(error))
  }
}

// export const getAllVideogames = () => {
//   return async (dispatch) => {
//     const r = (await axios(`http://localhost:3001/videogames`)).data
//     console.log("response de action ->", r)
//     dispatch({ type: GET_ALL_VIDEOGAMES, payload: r} )
//   }
// }


export const getVideogameByName = (name) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/videogames?name=${name}`)
    .then(response => response.json())
    .then(data => dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: data }))
    .catch(error => {
      console.error(error)
    })
  }
}

// export const getVidogameByName = (name) => {
//   return async (dispatch) => {
//     try {
//       const response = (await axios(`http://localhost:3001/videogames?name=${name}`)).data
//       dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: response })
      
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

export const orderByGenre = (payload) => {
  return {
    type: ORDER_BY_GENRE,
  }
}