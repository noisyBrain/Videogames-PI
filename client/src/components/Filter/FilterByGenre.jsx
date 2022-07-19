import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, filterByGenre } from "../../store/actions";

const FilterByGenre = ({ select, setSelect, setCurrentPage }) => {

  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  const handleFilterByGenre = (e) => {
    dispatch(filterByGenre(e.target.value));
    setSelect({
      ...select,
      genre: e.target.value,
    })
    setCurrentPage(1)
  };

  const handleGetAllGenres = useCallback(() => {
    dispatch(getAllGenres())
  }, [dispatch])

  useEffect(() => {
    handleGetAllGenres()
    return () => handleGetAllGenres() 
  }, [dispatch, handleGetAllGenres]);

  return (
    <select 
      value={select.genre}
      name="genres"
      id="category/genres"
      onChange={handleFilterByGenre}
    >
      <option>Genres</option>
      {genres?.map((v) => (
        <option key={v.id}>
          {v.name}
        </option>
      ))}
    </select>
  );
};

export default FilterByGenre;
