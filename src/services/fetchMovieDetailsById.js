export const fetchMovieDetailsById = async ({ movieId, setMovie }) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mzk2OTczODNhODEzMDA1YmUxNTBlN2Q4ZGU0ZDMxOSIsInN1YiI6IjY0OTE5ZGYxYzJmZjNkMDBlMmUyMWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbO3a4f3FNpftElFUbgd3_z8DfrptFKWxvdZo4ijCfs',
    },
  };

  await fetch(
    'https://api.themoviedb.org/3/movie/' + encodeURIComponent(movieId),
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      setMovie(data);
    })
    .catch(err => {
      console.error(err);
    });
};