import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';

export const MovieList = ({ movies, query, fromPage }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => {
        return (
          <li key={nanoid()} id={movie.id} className={css.item}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ query: query, from: fromPage }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  fromPage: PropTypes.string.isRequired,
};
