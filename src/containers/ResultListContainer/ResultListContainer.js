import ResultCountComponent from '@components/ResultCountComponent/ResultCountComponent';
import MovieService from '@services/MovieService';
import React from 'react';

export default function ResultListContainer() {
  const movies = MovieService.getMovies();

  return (
    <>
      <ResultCountComponent count={movies.length} />
    </>
  );
}
