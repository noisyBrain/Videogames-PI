import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../store/actions';
import { Link } from 'react-router-dom'; 

import style from './videogameDetail.module.css'

const VideogameDetail = (props) => {

  const dispatch = useDispatch()
  const { id } = useParams()

  const videogameDetail = useSelector(state => state.detail)
  console.log("vg detail componente -> ", videogameDetail)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch])

  return (
    <div className={style.main_container}>
      <div className={style.card}>
        <h1 className={style.name}>{videogameDetail.name}</h1>
        <img className={style.img} src={videogameDetail.background_image && videogameDetail.background_image} alt='not found'/>
        <h5 className={style.genres}>{videogameDetail.genres?.join(", ")}</h5>
          <p className={style.description}>{videogameDetail.description?.replace(/<[^>]+>/g, '')}</p>

        <section className={style.info}>

          <p className={style.released}>Released: {videogameDetail.released}</p>
          <p className={style.rating}>Rating: {videogameDetail.rating} ★</p>
          <p className={style.platforms}>Platforms: {videogameDetail.platforms?.join(", ")}</p>

        </section>
      </div>
      <Link to='/home'><button className={style.button}>☚</button></Link>
    </div>
  )
}

export default VideogameDetail;