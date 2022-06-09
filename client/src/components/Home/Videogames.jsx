/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import style from './videogames.module.css';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllVideogames, hideLoader } from "../../store/actions";

import Videogame from "./Videogame";

const Videogames = ({ videogames }) => {
  const dispatch = useDispatch();

  // const handleDelete = (e) => {
  //   console.log(e)
  // }

  useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(hideLoader())
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
            // handleDelete={handleDelete}
          />


        );
        })
      }
    </div>
  );
};

export default Videogames;
