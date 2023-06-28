import { Suspense, useState, useEffect } from 'react';
import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieYear } from 'utils/getMovieYear';
import { getMovieVote } from 'utils/getMovieVote';
import { getMovieGenres } from 'utils/getMovieGenres';
import { Loader } from 'components/Loader/Loader';
import Api from 'services/api';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    Api.fetchMovieDetails(movieId, setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state.from === 'home') {
      navigate('/');
    } else {
      navigate(`/movies?${location.state.query}`);
    }
  };

  return (
    <main className={css.main}>
      <button onClick={handleGoBack} className={css.btn}>
        &larr; Go back
      </button>
      <div className={css.div}>
        {movie.poster_path ? (
          <img
            className={css.img}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
            width="200"
            height="300"
            alt={movie.name || movie.title}
          ></img>
        ) : (
          <img
            src={require('../../images/noImgPlaceholder.jpg')}
            width="200"
            height="300"
            alt={movie.name || movie.title}
          ></img>
        )}
        <div className={css.desc}>
          <h1>
            {movie.name || movie.title} ({getMovieYear(movie)})
          </h1>
          <p>User score: {getMovieVote(movie)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{getMovieGenres(movie)}</p>
        </div>
      </div>
      <div className={css.info}>
        <h6>Additional information</h6>
        <ul>
          <li>
            <Link to={`cast`} state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
