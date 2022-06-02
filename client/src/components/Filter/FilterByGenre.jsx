import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, filterByGenre } from "../../store/actions";

const FilterByGenre = () => {

  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genres);

  const handleFilterByGenre = (e) => {
    dispatch(filterByGenre(e));
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <select
      name="genres"
      id="category/genres"
      onChange={(e) => handleFilterByGenre(e.target.value)}
    >
      <option value={-1}>Select an option</option>
      {genre?.map((v) => (
        <option key={v.id} value={v.name}>
          {v.name}
        </option>
      ))}
    </select>
  );
};

export default FilterByGenre;
