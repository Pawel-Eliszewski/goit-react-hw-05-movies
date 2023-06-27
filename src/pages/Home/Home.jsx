import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/fetchTrendingMovies';
import { Loader } from 'components/Loader';
import { MovieList } from 'components/MovieList/MovieList';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies({ setIsLoading, setTrendingMovies });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading ? <Loader /> : null}
      {trendingMovies.length > 0 ? <MovieList movies={trendingMovies} fromPage="home" /> : null}
    </>
  );
}
