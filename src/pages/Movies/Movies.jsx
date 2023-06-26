import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { fetchQueryMovies } from 'services/fetchQueryMovies';
import { Outlet } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
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
    fetchQueryMovies({ query, setQueryMovies });
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
      <Outlet />
      {queryMovies.length > 0 ? (
        <MovieList movies={queryMovies} fromPage="movies" />
      ) : null}
    </div>
  );
}
