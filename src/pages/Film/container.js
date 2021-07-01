import { formatMovieData } from '@components/features/ModalForm/utils';
import MovieDetail from '@components/features/MovieDetail';
import { ERROR_STATUS } from '@constants/StatusTypes';
import React, { useEffect, useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';

export default function FilmContainer({ selectedMovie, status, selectMovie }) {
  const { id } = useParams();

  useEffect(() => {
    selectMovie(Number(id));
  }, [id]);

  const formattedMovie = useMemo(() => {
    if (selectedMovie) {
      return formatMovieData(selectedMovie);
    }

    return null;
  }, [selectedMovie]);

  return !formattedMovie && status === ERROR_STATUS ? (
    <Redirect to="/not-found" push />
  ) : (
    formattedMovie && <MovieDetail {...formattedMovie} />
  );
}
