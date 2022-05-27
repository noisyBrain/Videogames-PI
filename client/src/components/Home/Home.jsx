import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../../store/actions';

import Filter from '../Order/FilterVideogames';
import Order from '../Order/OrderVideogames';
import SearchBar from '../Search/SearchVideogames';

const Home = () => {

  const videogames = useSelector(state => state.videogames)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getAllVideogames())
  // }) // ver si no rompe nada. Sino pasarle un array vacío

  const handleOnClick = e => {
    e.preventDefault();
    dispatch(getAllVideogames())
  }

  return (
    <div>
      <Link to='/videogames'>Create your own videogame!</Link>
      <h1>Videogames Page</h1>
      <Filter />
      <Order />
      <SearchBar />

      <button onClick={e => handleOnClick(e)}>Refresh</button>
    </div>
  )
}

export default Home;