import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllGenres, getPlatforms } from "../../store/actions";

const CreateForm = () => {

  const [state, setState] = useState({
    description: '',
    genres: [],
    name: '',
    platforms: [],
    rating: 0,
    released: '',
  })

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector(state => state.platforms)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGenres())
    dispatch(getPlatforms())
  }, [])

  const handleOnSubmit = e => {
    e.preventDefault()
    setState({
      ...state
    })
  }

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  console.log('platforms from component -> ', platforms)

  return (
    <>
      <h1>Create your own Videogame!</h1>
      <Link to='/home'>Go Back</Link>
      <form onSubmit={e => handleOnSubmit(e.target.value)}>
        <label>Name: </label>
          <input type="text" value={state.name} name='name' placeholder="Name" />

        <label>Description: </label>
          <textarea type="text" value={state.description} name='description' placeholder="Description" onChange={handleOnChange}/>

        <label>Released: </label>
          <input type="date" value={state.released} name='released' placeholder="Released" onChange={handleOnChange}/>

        <label>Rating: </label>
          <input type='number' value={state.rating} name='rating' placeholder="Rating" onChange={handleOnChange}/>

        <label>Genres: </label>
          <select multiple={true} value={state.genres} name='genres' onChange={handleOnChange}>
            <option>Select a genre</option>
            {
              genres?.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name}
              </option>
            ))
            }
          </select>

        <label>
          Platforms:
          <select multiple={true} value={state.platforms} name='platforms' onChange={handleOnChange}>
          {
            platforms.map(p => (
              <option key={p} value={p}>
                {p}
              </option>
            ))
          }
          </select>
        </label>

        <button type="submit">Crear</button>
      </form>
    </>
  );
};

export default CreateForm;
