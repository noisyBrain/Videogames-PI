import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../store/actions';

const VideogameDetail = (props) => {

  const dispatch = useDispatch()
  const { id } = useParams()

  const videogameDetail = useSelector(state => state.detail)
  console.log("vg detail componente -> ", videogameDetail)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch])

  return (
    <div style={{width: "6rem", height: "6rem", display:"flex", margin: "20px", position: "relative", justifyContent: "space-between"}}>
      <h3>{videogameDetail.name}</h3>
      <img src={videogameDetail.background_image && videogameDetail.background_image} alt='not found'/>
      <h5>{videogameDetail.genre + " "}</h5>
      <p>{videogameDetail.description}</p>
      <p>{videogameDetail.released}</p>
      <p>{videogameDetail.rating}</p>
      <p>{videogameDetail.platforms + " "}</p>
    </div>
  )
}

export default VideogameDetail;