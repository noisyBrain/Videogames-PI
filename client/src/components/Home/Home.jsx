import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGenre,
  getAllVideogames,
  getVideogameByName,
  orderAlphabetically,
  orderByCreation,
  orderByRating,
  promedioRating,
} from "../../store/actions";

import FilterByGenre from "../Filter/FilterByGenre";
import Loading from "../Loading/Loading";
import style from "./home.module.css";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../Search/SearchVideogames";
import Sort from "../Sort/SortVideogames";
import Videogames from "./Videogames";

const Home = () => {
  
  const videogames = useSelector((state) => state.videogames);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();


  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage] = useState(15);
  const [select, setSelect] = useState({
    alph: "Alphabetical",
    rating: "Rating",
    source: "Source",
    genre: "Genres",
  });

  const indexOfLastVideogame = currentPage * videogamesPerPage; 
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; 

  const currentVideogames = videogames.slice( 
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRPGRating = (payload) => {
    dispatch(promedioRating(payload))
    const ratings = videogames.map(v => v.rating)
    const promedio = ratings.reduce((a,b) => a+b) / ratings.length
    alert(promedio)
  }

  const handleOnClickRefresh = (e) => {
    dispatch(getAllVideogames());
    setCurrentPage(1);
    setSelect({
      alph: "Alphabetical",
      rating: "Rating",
      source: "Source",
      genre: "Genres",
    });
  };

  const handleOnSearch = (name) => {
    name
    ? dispatch(getVideogameByName(name))
    : dispatch(filterByGenre('Genres'))
    setCurrentPage(1)
  };

  const handleAlphabetically = (e) => {
    dispatch(orderAlphabetically(e.target.value));
    setCurrentPage(1);
    setSelect({
      ...select,
      alph: e.target.value,
    });
  };

  const handleRating = (e) => {
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setSelect({
      ...select,
      rating: e.target.value,
    });
  };

  const handleCreation = (e) => {
    dispatch(orderByCreation(e.target.value));
    setCurrentPage(1);
    setSelect({
      ...select,
      source: e.target.value,
    });
  };

  const all = (
    <div className={style.main_container}>
      <h1 className={style.title}>Videogames Page</h1>

      <nav className={style.navbar}>
        <Link to="/videogame/create">
          <button className={style.create}>Create your own videogame</button>!
        </Link>
        <FilterByGenre select={select} setSelect={setSelect} setCurrentPage={setCurrentPage}/>
        <Sort
          select={select}
          onAlph={handleAlphabetically}
          onRating={handleRating}
          onCreation={handleCreation}
        />
      </nav>

        <button onClick={() => handleRPGRating('RPG')}>Promedio</button>
      <SearchBar onSearch={handleOnSearch} />
      <button
        className={style.button_refresh}
        onClick={(e) => handleOnClickRefresh(e)}
      >
        Refresh
      </button>

      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={videogames.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Videogames videogames={currentVideogames} />
    </div>
  );

  return loading ? <Loading /> : all;
};

export default Home;
