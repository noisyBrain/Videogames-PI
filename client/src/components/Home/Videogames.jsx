/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllVideogames, getDetail } from "../../store/actions";
import Videogame from "./Videogame";

const Videogames = ({ videogames }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideogames());
  }, []);

  return (
    <div>
      {
        videogames?.map((v, i) => {
        return (
          <>

          <Videogame
            key={i+v.name}
            name={v.name}
            image={v.background_image}
            genre={v.genre}
          />
          <Link to={`/videogame/${v.id}`}>Texto</Link>

          </>
        );
        })
      }
    </div>
  );
};

export default Videogames;
