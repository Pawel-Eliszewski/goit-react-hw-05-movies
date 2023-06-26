export const getMovieGenres = movie => {
  if (movie.genres) {
    let genre = movie.genres.map(genre => genre.name);
    return genre.join(', ');
  }
};
