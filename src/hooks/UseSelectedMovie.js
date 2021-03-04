import MovieService from '@services/MovieService';
import { useEffect, useState } from 'react';

/**
 * Use selected movie hook used to update the selected movie
 * by an id
 */
export default function useSelectedMovie() {
  const [selectedMovieId, setSelectedMovieId] = useState();

  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    const movie = MovieService.getMovieById(selectedMovieId);
    setSelectedMovie(movie);
    window.document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedMovieId]);

  return { selectedMovie, selectedMovieId, setSelectedMovieId };
}
