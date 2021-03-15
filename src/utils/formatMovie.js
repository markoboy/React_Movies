const formatMovie = (movie) => ({
  ...movie,
  releaseDate: new Date(movie.release_date),
  image: movie.poster_path,
  runtime: movie.runtime || '',
});

export default formatMovie;
