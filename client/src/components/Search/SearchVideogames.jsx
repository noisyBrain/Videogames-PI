import { useEffect } from 'react';
import style from './search.module.css';


const SearchBar = ({ onSearch }) => {

  useEffect(() => {
    console.log("Render del componente SearchBar")
  })
  
  return (

    <div>

      <input className={style.input} type='search' onChange={(e) => onSearch(e.target.value)} placeholder='Search videogame' />
    
    </div>
  )
}

export default SearchBar
