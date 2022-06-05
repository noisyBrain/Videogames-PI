/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import style from './videogames.module.css';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "../../store/actions";
import Videogame from "./Videogame";

const Videogames = ({ videogames }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideogames());
  }, []);

  return (
    <div className={style.main_container}>
      {
        videogames?.map((v, i) => {
        return (

          <Videogame
            key={i+v.name}
            name={v.name}
            image={v.background_image}
            genres={v.genres}
            id={v.id}
          />

        );
        })
      }
    </div>
  );
};

export default Videogames;
