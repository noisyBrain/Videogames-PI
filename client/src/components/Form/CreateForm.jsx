/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllGenres, getPlatforms, postVideogame } from "../../store/actions";

// const validate = (state) => {
//   const error = {};
//   switch (state) {
//     case !state.name:
//       error.name = 'Name must be between 4 and 20 characters'
//       return error.name
//     case !state.description.length || state.description.length > 150:
//       return error.description = 'Description must be between 1 and 150 characters'
//     case state.rating < 0 && state.rating > 5:
//       return error.rating = 'Rating must be between 0 and 5'
//     case !state.genres.length:
//       return error.genres = 'At least one genre is required'
//     case !state.platforms.length:
//       return error.platforms = 'At least one platform is required'
//     default:
//       return error
//   }
// };

const validate = (state) => {
  const error = {}
  if (!state.name || state.name.length < 4 || state.name.length > 30) {
    error.name = 'Name must be between 4 and 30 characters'
  }
  if (!state.description || state.description.length < 1 || state.description.length > 200) {
    error.description = 'Description must be between 1 and 200 characters'
  }
  if (!state.rating || state.rating < 0 || state.rating > 5) {
    error.rating = 'Rating must be between 0.1 and 5.0'
  }
  if (!state.genres || state.genres.length < 1) {
    error.genres = 'At least one genre is required'
  }
  if (!state.platforms || state.platforms.length < 1) {
    error.platforms = 'At least one platform is required'
  }
  return error
}



const CreateForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    description: "",
    genres: [],
    name: "",
    platforms: [],
    rating: 0,
    released: "",
  });
  const [error, setError] = useState({})

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(getPlatforms());
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(postVideogame(state));
    alert("Videogame creado con éxito!");
    setState({
      description: "",
      genres: [],
      name: "",
      platforms: [],
      rating: 0,
      released: "",
    });
    setError(validate({
      ...state,
      [e.target.name]: e.target.value
    }))
    navigate("/home");
  };

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setError(validate({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: [...state[e.target.name], e.target.value],
    });
    setError(validate({
      ...state,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <>
      <h1>Create your own Videogame!</h1>
      <Link to="/home">Go Back</Link>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div>

          <label>Name: </label>
          <input
            type="text"
            value={state.name}
            name="name"
            placeholder="Name"
            onChange={(e) => handleOnChange(e)} />
          {
            error.name && (
              <span>{error.name}</span>
            )
          }

        </div>

        <div>

          <label>Description: </label>
          <textarea
            type="text"
            value={state.description}
            name="description"
            placeholder="Description"
            onChange={(e) => handleOnChange(e)}
          />
          {
            error.description && <span>{error.description}</span>
          }

        </div>

        <div>

          <label>Released: </label>
          <input
            type="date"
            value={state.released}
            name="released"
            placeholder="Released"
            onChange={(e) => handleOnChange(e)}
          />

        </div>

        <div>

          <label>Rating: </label>
          <input
            type="number"
            value={state.rating}
            name="rating"
            placeholder="Rating"
            onChange={(e) => handleOnChange(e)}
          />
          {
            error.rating && (
              <span>{error.rating}</span>
            )
          }

        </div>

        <div>

          <label>Genres: </label>
          <select
            multiple={true}
            value={state.genres}
            name="genres"
            onChange={(e) => handleSelect(e)}
          >
            <option>Select a genre</option>
            {genres?.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name}
              </option>
            ))}
          </select>
          {
            error.genres && (
              <span>{error.genres}</span>
            )
          }

        </div>

        <div>

          <label>
            Platforms:
            <select
              multiple={true}
              value={state.platforms}
              name="platforms"
              onChange={(e) => handleSelect(e)}
            >
              {platforms.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          {
            error.platforms && <span>{error.platforms}</span>
          }

        </div>

        <button type="submit">Crear</button>
      </form>
    </>
  );
};

export default CreateForm;
