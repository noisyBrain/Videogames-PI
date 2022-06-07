import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import style from './videogame.module.css'

const Videogame = ({ name, image, genres, id }) => {

  useEffect(() => {
    console.log("Render del componente Videogame")
  })

  return (

    <div className={style.main_container}>

      {/* <div className={style.cards}> */}

        <div className={style.card}>

          <div className={style.image}>
            <img src={image} alt='not found'/>
          </div>

          <div className={style.name}>
            <h3>{name}</h3>
          </div>
          <div className={style.genre}>
              <h5>{`${genres.join(", ")}`}</h5>
          </div>

          <Link to={`/videogame/${id}`}><button className={`${style.custom_btn} ${style.btn}`}><span>Detail</span></button></Link>

        </div>

      {/* </div> */}

    </div>
  )
}

export default Videogame;