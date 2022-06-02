import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllVideogames, orderAlphabetically, orderByRating } from "../../store/actions";

const Order = ({ onAlph, onRating, onCreation }) => {

  return (
    <>
    <select name='' id='order/alphabetically' onChange={e => onAlph(e.target.value)}>
      <option value="alphabetically" >Alphabetical</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>

    <select name='' id='order/rating' onChange={e => onRating(e.target.value)}>
      <option value="rating">Rating</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>

    <select name='' id='order/created/existing' onChange={e => onCreation(e.target.value)}>
      <option value="existing">Existing</option>
      <option value="created">Created</option>
    </select>
    </>
  );
};

export default Order;
