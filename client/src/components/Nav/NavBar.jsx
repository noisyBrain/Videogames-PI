import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getVideogameByName, orderAlphabetically, orderByCreation, orderByRating } from "../../store/actions";
import FilterByGenre from "../Filter/FilterByGenre";
import Order from "../Order/OrderVideogames";

// import style from './home.module.css';
const Navbar = () => {
  
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
    <nav>
      <FilterByGenre />
      <Order onAlph={handleAlphabetically} onRating={handleRating} onCreation={handleCreation}/>
    </nav>
  )
}

export default Navbar;