/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAllVideogames } from "../../store/actions";
import Videogame from "./Videogame";

const Videogames = ({ videogames }) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideogames());
  }, []);

  return (
    <div>
      {videogames?.map((v, i) => {
        return (
          <Videogame
            key={i}
            name={v.name}
            image={v.background_image}
            genre={v.genre}
          />
        );
        })}
    </div>
  );
};

export default Videogames;
