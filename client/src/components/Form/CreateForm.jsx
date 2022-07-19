/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllGenres, getPlatforms, postVideogame } from "../../store/actions";

import style from "./createform.module.css";

const validate = (state) => {
  const error = {};
  // name validation
  if (state.name.length < 4) error.name = "Name must have at least 4 characters";
  if (!state.name) error.name = "Name needs a value";
  if (state.name.length > 40) error.name = "Name must have max 40 characters";
  // description validation
  if (state.description.length < 30 || state.description.length > 300) error.description = "Description must be between 30 and 300 characters"
  // rating validation
  if (!state.rating) error.rating = "Videogame must have rating";
  if(state.rating < 0 || state.rating > 5) error.rating = "Rating must be between 0.1 and 5.0"
  // genres validation
  if (!state.genres.length) error.genres = "Videogame must have at least 1 genre";
  // platforms validation
  if (!state.platforms.length) error.platforms = "Videogame must have at least 1 platform";

  return error;
};

const CreateForm = () => {

  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [state, setState] = useState({
    description: "",
    genres: [],
    background_image: '',
    name: "",
    platforms: [],
    rating: 0,
    released: "",
  });

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(getPlatforms());
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
      dispatch(postVideogame(state));
      alert("Videogame creado con éxito!");
      setState({
        description: "",
        genres: [],
        name: "",
        background_image: "",
        platforms: [],
        rating: 0,
        released: "",
      });
      navigate("/home");
  };

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...state,
        [e.target.name]: e.target.value,
      })
    ); 
  };

  const handleSelect = (e) => {
    setState({
      ...state,
      [e.target.name]: [...state[e.target.name], e.target.value],
    });
    setError(
      validate({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className={style.container_form}>
      <form className={style.form} onSubmit={(e) => handleOnSubmit(e)}>
        <legend className={style.legend}>Create your own Videogame!</legend>

        <label className={style.label_form}>Name: </label>
        <input
          className={style.input_form}
          type="text"
          value={state.name}
          name="name"
          placeholder="Name"
          onChange={(e) => handleOnChange(e)}
        />
        {error.name && <span>{error.name}</span>}


        <label className={style.label_form}>Description: </label>
        <textarea
          className={style.textarea_form}
          type="text"
          value={state.description}
          name="description"
          placeholder="Description"
          onChange={(e) => handleOnChange(e)}
        />
        {error.description && <span>{error.description}</span>}


        <label className={style.label_form}>Released: </label>
        <input
          className={style.input_form}
          type="date"
          value={state.released}
          name="released"
          placeholder="Released"
          onChange={(e) => handleOnChange(e)}
        />


        <label className={style.image_form}>Image: </label>
        <input
          className={style.input_form}
          type="text"
          value={state.background_image}
          name="background_image"
          placeholder="Image"
          onChange={(e) => handleOnChange(e)}
        />
        {error.background_image && <span>{error.image}</span>}

        <label className={style.label_form}>Rating: </label>
        <input
          className={style.input_form}
          type="number"
          value={state.rating}
          name="rating"
          placeholder="Rating"
          onChange={(e) => handleOnChange(e)}
        />
        {error.rating && <span>{error.rating}</span>}


        <label className={style.label_form}>Genres: </label>
        <select
          className={style.select_form}
          multiple={true}
          value={state.genres}
          name="genres"
          onChange={(e) => handleSelect(e)}
        >
          {genres?.map((v) => (
            <option className={style.option_form} key={v.id} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>
        {error.genres && <span>{error.genres}</span>}


        <label className={style.label_form}>Platforms: </label>
          <select
            className={style.select_form}
            multiple={true}
            value={state.platforms}
            name="platforms"
            onChange={(e) => handleSelect(e)}
          >
            {platforms.map((p) => (
              <option className={style.option_form} key={p.name} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        {error.platforms && <span>{error.platforms}</span>  }

        <div className={style.buttons}>

          <button disabled={Object.keys(error).length} className={style.button_form} type="submit">Create</button>

          <Link to="/home">
            <button className={style.button_form}>Go Back</button>
          </Link>


        </div>

      </form>
    </div>
  );
};

export default CreateForm;
