import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../store/actions';

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
        <section className={style.section_description}>
          <p className={style.description}>{videogameDetail.description?.replace(/<[^>]+>/g, '')}</p>
        </section>
        <p className={style.released}>{videogameDetail.released}</p>
        <p className={style.rating}>{videogameDetail.rating}</p>
        <p className={style.platforms}>{videogameDetail.platforms?.join(", ")}</p>
      </div>
    </div>
  )
}

export default VideogameDetail;