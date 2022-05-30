import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByGenre } from '../../store/actions';

const Genre = () => {
  
  useEffect(() => {
    dispatch(orderByGenre())
  }, [])

  const [state, setState] = useState('')
  const dispatch = useDispatch()
  const genre = useSelector(state => state.genres)
  console.log(state)

  const handleGenres = (e) => {
    setState(e)
  }

  return (
    <select name='genres' id='category/genres' onClick={e => handleGenres(e.target.value)}>
      <option value={-1}>Select an option</option>
      {
        genre.map( (v, i) => (
          <option key={v.id} value={i.id}>{v.name}</option>
        ))
      }
    </select>
  )
}

export default Genre;