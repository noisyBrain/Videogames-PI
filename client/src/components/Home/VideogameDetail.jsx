import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./videogameDetail.module.css";

const VideogameDetail = (props) => {
  const { id } = useParams();
  const [videogameDetail, setVideogameDetail] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/videogame/${id}`)
      .then((response) => {
        setVideogameDetail(response.data);
      })
      .catch((error) => alert("Videogame not found"));
  }, [id]);

  return videogameDetail ? (
    <div className={style.main_container}>
      <div className={style.card}>
        <h1 className={style.name}>{videogameDetail.name}</h1>
        <img
          className={style.img}
          src={
            videogameDetail.background_image && videogameDetail.background_image
          }
          alt="not found"
        />
        <h5 className={style.genres}>{videogameDetail.genres?.join(", ")}</h5>
        <p className={style.description}>
          {videogameDetail.description?.replace(/<[^>]+>/g, "")}
        </p>

        <section className={style.info}>
          <p className={style.released}>Released: {videogameDetail.released}</p>
          <p className={style.rating}>Rating: {videogameDetail.rating} ★</p>
          <p className={style.platforms}>
            Platforms: {videogameDetail.platforms?.join(", ")}
          </p>
        </section>
      </div>
      <Link to="/home">
        <button className={style.button}>☚</button>
      </Link>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default VideogameDetail;
