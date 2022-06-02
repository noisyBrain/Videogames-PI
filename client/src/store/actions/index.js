import axios from "axios";
import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_NAME,
  ORDER_ALPHABETICALLY,
  FILTER_BY_GENRE,
  GET_ALL_GENRES,
  ORDER_BY_RATING,
  ORDER_BY_CREATION,
  GET_DETAIL,
  CREATE_VIDEOGAME,
  GET_PLATFORMS,
} from "./actionTypes";

// export const getAllVideogames = () => {
//   return (dispatch) => {
//     return fetch(`http://localhost:3001/videogames`)
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: GET_ALL_VIDEOGAMES, payload: data }))
//       .catch((error) => console.error(error));
//   };
// };

export const getAllVideogames = () => {
  return async (dispatch) => {
    const r = (await axios(`http://localhost:3001/videogames`)).data
    console.log("response de action ->", r)
    dispatch({ type: GET_ALL_VIDEOGAMES, payload: r} )
  }
}

// export const getVideogameByName = (name) => {
//   return (dispatch) => {
//     return fetch(`http://localhost:3001/videogames?name=${name}`)
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: data }))
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

export const getVideogameByName = (name) => {
  return async (dispatch) => {
    try {
      const response = (await axios(`http://localhost:3001/videogames?name=${name}`)).data
      dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: response })

    } catch (error) {
      console.error(error)
    }
  }
}

export const orderAlphabetically = (payload) => {
  return { type: ORDER_ALPHABETICALLY, payload };
};

export const orderByRating = (payload) => {
  return { type: ORDER_BY_RATING, payload };
};

export const orderByCreation = (payload) => {
  return { type: ORDER_BY_CREATION, payload };
};

// export const getAllGenres = () => {
//   return (dispatch) => {
//     return fetch(`http://localhost:3001/genres`)
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: GET_ALL_GENRES, payload: data }))
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

export const getAllGenres = () => {
  return async (dispatch) => {
    try {
      const response = (await axios(`http://localhost:3001/genres`)).data
      return dispatch({ type: GET_ALL_GENRES, payload: response})

    } catch (error) {
      console.error(error)
    }
  }
}

export const filterByGenre = (payload) => {
  return {
    type: FILTER_BY_GENRE,
    payload,
  };
};


// export const getDetail = id => {
//   return (dispatch) => {
//     return fetch(`http://localhost:3001/videogame/${id}`)
//       .then(response => response.json())
//       .then(data => dispatch({ type: GET_DETAIL, payload: data }))
//       .catch(error => console.error(error))
//   }
// }

export const getDetail = id => {
  return async dispatch => {
    try {
      const response = (await axios(`http://localhost:3001/videogame/${id}`)).data
      dispatch({ type: GET_DETAIL, payload: response })
      
    } catch (error) {
      console.error(error)
    }
  }
}

export const getPlatforms = () => {
  return async dispatch => {
    const response = (await axios(`https://api.rawg.io/api/platforms?key=233e7609748b485bbf33ebb04daece71`)).data.results
    dispatch({ type: GET_PLATFORMS, payload: response })
  }
}

export const postVideogame = () => {
  return async dispatch => {
    const response = await axios.post(`http://localhost:3001/videogame`) 
    dispatch({ type: CREATE_VIDEOGAME, payload: response })
  }
}