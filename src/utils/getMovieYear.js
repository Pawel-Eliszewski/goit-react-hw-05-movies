export const getMovieYear = movie => {
  if (movie.release_date) {
    return movie.release_date.slice(0, 4);
  } else if (movie.first_air_date) {
    return movie.first_air_date.slice(0, 4);
  }
};
