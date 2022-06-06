/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getVideogameByName, orderAlphabetically, orderByCreation, orderByRating } from "../../store/actions";

import style from './home.module.css';
import FilterByGenre from "../Filter/FilterByGenre";
import Order from "../Order/OrderVideogames";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../Search/SearchVideogames";
import Videogames from "./Videogames";

const Home = () => {
  const videogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();


  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage] = useState(15);
  const [select, setSelect] = useState({
    alph: 'Alphabetical',
    rating: 'Rating',
    source: 'Source',
    genre: 'Genres'
  })

  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = videogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const handleOnClickRefresh = (e) => {
    dispatch(getAllVideogames());    
    setCurrentPage(1)
    setSelect({    
      alph: 'Alphabetical',
      rating: 'Rating',
      source: 'Source',
      genre: 'Genres',
    })
  };

  const handleOnSearch = (name) => {
    name 
    ? dispatch(getVideogameByName(name)) 
    : dispatch(getAllVideogames()) 
  };

  const handleAlphabetically = (e) => {
    dispatch(orderAlphabetically(e.target.value))
    setCurrentPage(1)
    setSelect({
      ...select,
      alph: e.target.value
    })
  }

  const handleRating = (e) => {
    dispatch(orderByRating(e.target.value))
    setCurrentPage(1)
    setSelect({
      ...select,
      rating: e.target.value
    })
  }

  const handleCreation = (e) => {
    dispatch(orderByCreation(e.target.value))
    setCurrentPage(1)
    setSelect({
      ...select,
      source: e.target.value
    })
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className={style.main_container}>
      <h1 className={style.title}>Videogames Page</h1>

      <nav className={style.navbar}>

        <Link to="/videogame/create"><button className={style.create}>Create your own videogame</button>!</Link>
        <FilterByGenre select={select} setSelect={setSelect}/>
        <Order select={select} onAlph={handleAlphabetically} onRating={handleRating} onCreation={handleCreation}/>

      </nav>

      <SearchBar onSearch={handleOnSearch} />
      <button className={style.button_refresh} onClick={(e) => handleOnClickRefresh(e)}>Refresh</button>
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={videogames.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Videogames videogames={currentVideogames} />
    </div>
  );
};

export default Home;
