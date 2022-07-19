import { Link } from "react-router-dom";

import style from "./videogame.module.css";

const Videogame = ({ name, image, genres, id, rating }) => {
  return (
    <div className={style.main_container}>
      <div className={style.card}>
        <div className={style.image}>
          <img src={image} alt="not found" />
        </div>

        <div className={style.name}>
          { name.length > 23
            ? <h3>{name.slice(0, 23) + "..."}</h3>
            : <h3>{name}</h3>
          }
        </div>
        <div className={style.genre}>
          <h5>{`${genres.join(", ")}`}</h5>
        </div>

        <Link to={`/videogame/${id}`}>
          <button className={`${style.custom_btn} ${style.btn}`}>
            <span>Detail</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Videogame;
