import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAllVideogames } from '../../store/actions';
import Videogame from './Videogame';

const Videogames = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const videogames = useSelector(state => state.videogames)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllVideogames())
  }, [])

  return (
    <div>
      {
        videogames
          .filter(videogame => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = videogame.name.toLowerCase();
            return name.startsWith(filter.toLowerCase())
          })
          .map((v, i) => {
          return (
            <Videogame 
              key={i}
              name={v.name}
              image={v.background_image}
              genre={v.genre}
            />
            )
          })
      }
    </div>
  )
}

export default Videogames;
