import { useState, useSelector } from 'react';

const Pagination = () => {

  const [state, setState] = useState({
    previous: '',
    next: '',
  });

  const handlePreviousOnClick = e => {
    e.preventDefault();
    setState(state.previous)
  }

  const handleNextOnClick = e => {
    e.preventDefault();
    setState()
  }

  return (
    <>
      <button onClick={handlePreviousOnClick}>Previuos</button>
      <button onClick={handleNextOnClick}>Next</button>
    </>
  );
};

export default Pagination;