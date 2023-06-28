import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import Api from 'services/api';
import css from './Home.module.css';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    Api.fetchTrendingMovies(setTrendingMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <Suspense fallback={<Loader />}>
        <Outlet />
        {trendingMovies.length > 0 ? (
          <MovieList movies={trendingMovies} fromPage="home" />
        ) : null}
      </Suspense>
    </>
  );
}
