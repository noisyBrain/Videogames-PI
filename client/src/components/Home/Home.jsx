import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getAllVideogames, getVideogameByName } from '../../store/actions';


import Filter from '../Order/FilterVideogames';
import Order from '../Order/OrderVideogames';
import SearchBar from '../Search/SearchVideogames';
import Videogames from './Videogames';

const Home = () => {

  const dispatch = useDispatch()

  const handleOnClick = e => {
    e.preventDefault();
    dispatch(getAllVideogames())
  }

  const handleOnSearch = name => {
    dispatch(getVideogameByName(name))
  }

  return (
    <div>

      <Link to='/videogames'>Create your own videogame!</Link>
      <h1>Videogames Page</h1>
      <Filter />
      <Order />
      <SearchBar onSearch={handleOnSearch} />
      <Videogames />
      <button onClick={e => handleOnClick(e)}>Refresh</button>

    </div>
  )
}

export default Home;