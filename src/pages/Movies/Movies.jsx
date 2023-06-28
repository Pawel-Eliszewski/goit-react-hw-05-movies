import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import Api from 'services/api';
import css from './Movies.module.css';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryMovies, setQueryMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    const query = searchParams.toString().slice(6);
    Api.fetchQueryMovies(query, setQueryMovies);
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          id={nanoid()}
          autoComplete="off"
          placeholder="Movie title"
          required
        />
        <button type="submit">Search</button>
      </form>
      <Suspense fallback={<Loader />}>
        <Outlet />
        {queryMovies.length > 0 ? (
          <MovieList
            movies={queryMovies}
            query={searchParams.toString()}
            fromPage="movies"
          />
        ) : null}
      </Suspense>
    </div>
  );
}
