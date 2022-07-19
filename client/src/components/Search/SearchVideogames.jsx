import style from "./search.module.css";

const SearchBar = ({ onSearch }) => {

  return (
    <div>
      <input
        className={style.input}
        type="search"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search videogame"
      />
    </div>
  );
};

export default SearchBar;
