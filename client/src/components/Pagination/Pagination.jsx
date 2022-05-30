import { useState, useSelector } from 'react';

const Pagination = ({ videogamesPerPage, totalVideogames, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul>
        {
          pageNumbers?.map(number => (
            <li key={number}>
              <a onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Pagination;