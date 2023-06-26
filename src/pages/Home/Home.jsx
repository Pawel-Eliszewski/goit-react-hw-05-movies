import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/fetchTrendingMovies';
import { MovieList } from 'components/MovieList/MovieList';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies({ setTrendingMovies });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendingMovies.length > 0 ? <MovieList movies={trendingMovies} fromPage="home" /> : null}
    </>
  );
}
