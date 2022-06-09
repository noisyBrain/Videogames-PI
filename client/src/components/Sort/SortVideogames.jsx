import { useEffect } from 'react';

const Sort = ({ onAlph, onRating, onCreation, select }) => {

  useEffect(() => {
    console.log("Render del componente Sort")
  })

  return (
    <>
    <select value={select.alph} name='' id='sort/alphabetically' onChange={onAlph}>
      <option>Alphabetical</option>
      <option>Ascending</option>
      <option>Descending</option>
    </select>

    <select value={select.rating} name='' id='sort/rating' onChange={onRating}>
      <option>Rating</option>
      <option>Ascending</option>
      <option>Descending</option>
    </select>

    <select value={select.source} name='' id='sort/created/existing' onChange={onCreation}>
      <option>Source</option>
      <option>Existing</option>
      <option>Created</option>
    </select>
    </>
  );
};

export default Sort;
