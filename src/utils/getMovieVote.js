export const getMovieVote = movie => {
  let movieVote = Math.round(movie.vote_average * 10);
  return movieVote;
};
