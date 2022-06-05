import style from './pagination.module.css';

const Pagination = ({ videogamesPerPage, totalVideogames, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <section className={style.section}>

      <ul className={style.ul}>
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

    </section>
  );
};

export default Pagination;