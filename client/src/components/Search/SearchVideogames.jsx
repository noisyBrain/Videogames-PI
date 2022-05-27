import { useSelector } from 'react'

const SearchBar = () => {

  const state = useSelector(state => state.videogames)

  return (
    <input placeholder='Search video game'/>
  )
}

export default SearchBar;