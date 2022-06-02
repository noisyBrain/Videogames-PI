/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getVideogameByName, orderAlphabetically, orderByCreation, orderByRating } from "../../store/actions";

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
  const [order, setOrder] = useState('')

  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = videogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(getAllVideogames());
  };

  const handleOnSearch = (name) => {
    dispatch(getVideogameByName(name));
  };

  const handleAlphabetically = (e) => {
    dispatch(orderAlphabetically(e))
    setCurrentPage(1)
    setOrder(`Ordered ${e}`)
  }

  const handleRating = (e) => {
    dispatch(orderByRating(e))
    setCurrentPage(1)
    setOrder(`Ordered ${e}`)
  }

  const handleCreation = (e) => {
    dispatch(orderByCreation(e))
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div>
      <Link to="/videogame/create">Create your own videogame!</Link>
      <h1>Videogames Page</h1>
      <FilterByGenre />
      <Order onAlph={handleAlphabetically} onRating={handleRating} onCreation={handleCreation}/>
      <SearchBar onSearch={handleOnSearch} />
      <button onClick={(e) => handleOnClick(e)}>Refresh</button>
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={videogames.length}
        paginate={paginate}
      />
      <Videogames videogames={currentVideogames} />
    </div>
  );
};

export default Home;
