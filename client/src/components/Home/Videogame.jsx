// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllVideogames } from '../../store/actions';

const Videogame = ({ name, image, genre }) => {

  return (
    <div style={{width: "6rem", height: "6rem", display:"flex", margin: "20px", position: "relative", justifyContent: "space-between"}}>
      <h3>{name}</h3>
      <img src={image} alt='not found'/>
      <h5>{genre}</h5>
    </div>
  )
}

export default Videogame;