/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames, getVideogameByName } from '../../store/actions';


import Genre from '../Order/OrderByGenres';
import Order from '../Order/OrderVideogames';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../Search/SearchVideogames';
import Videogames from './Videogames';

const Home = () => {

  const videogames = useSelector(state => state.videogames)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const [videogamesPerPage] = useState(15)

  const indexOfLastVideogame = currentPage * videogamesPerPage
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
  const currentVideogames = videogames.slice(indexOfFirstVideogame, indexOfLastVideogame)

  const handleOnClick = e => {
    e.preventDefault();
    dispatch(getAllVideogames())
  }

  const handleOnSearch = name => {
    dispatch(getVideogameByName(name))
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>

      <Link to='/videogames'>Create your own videogame!</Link>
      <h1>Videogames Page</h1>
      <Genre />
      <Order />
      <SearchBar onSearch={handleOnSearch} />
      <Pagination videogamesPerPage={videogamesPerPage} totalVideogames={videogames.length} paginate={paginate}/>
      <Videogames videogames={currentVideogames} />
      <button onClick={e => handleOnClick(e)}>Refresh</button>

    </div>
  )
}

export default Home;