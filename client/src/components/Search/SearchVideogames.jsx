import { useState } from 'react';
import style from './search.module.css';


const SearchBar = ({ onSearch }) => {

  // const [state, setState] = useState('')

  // const handleOnChange = (e) => {
  //   setState(e)
  // }
  
  return (

    <div>

      <input className={style.input} type='search' onChange={(e) => onSearch(e.target.value)} />
      {/* <input type='submit' onClick={() => onSearch(state)}/> */}
    
    </div>
  )
}

export default SearchBar
