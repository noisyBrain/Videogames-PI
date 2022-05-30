import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getVideogameByName } from '../../store/actions';

const SearchBar = ({ onSearch }) => {

  const [state, setState] = useState('')

  const handleOnChange = (e) => {
    setState(e)
  }

  
  return (

    <div>

      <input type='search' value={state} onChange={(e) => handleOnChange(e.target.value)} />
      <input type='submit' onClick={() => onSearch(state)}/>
    
    </div>
  )
}

export default SearchBar

    // <input 
    //   input={searchParams.get("search") || ""}
    //   onChange={e => handleOnChange(e)}
    //   placeholder='Search video game'/>

    // let [searchParams, setSearchParams] = useSearchParams
    // const handleOnChange = (e) => {
    //   let filter = e.target.value
    //   filter ? setSearchParams({ filter }) : setSearchParams({})
    // }