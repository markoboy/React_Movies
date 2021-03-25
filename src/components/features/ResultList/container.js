import {
  MODAL_FORM_DELETE_ACTION,
  MODAL_FORM_EDIT_ACTION,
} from '@components/features/ModalForm/constants';
import ResultItemPopOut from '@components/features/ResultList/ResultItemPopOut';
import ResultListItem from '@components/features/ResultList/ResultListItem';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import ResultListComponent from './component';

const tileActions = [MODAL_FORM_EDIT_ACTION, MODAL_FORM_DELETE_ACTION];

export default function ResultListContainer({
  movies,
  totalAmount,
  setFormSelectedMovie,
  setFormAction,
  setIsOpenedModal,
  selectMovie,
}) {
  const handleActionClick = useCallback((action, movie) => {
    setFormSelectedMovie(movie);
    setFormAction(action);
    setIsOpenedModal(true);
  }, []);

  const handleResultItemClick = useCallback((movieId) => {
    selectMovie(movieId);
    window.document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getResultListItems = useCallback(
    (movie) => (
      <ResultListItem
        key={movie.id}
        action={movie.id}
        onClick={handleResultItemClick}
        {...movie}
      >
        <ResultItemPopOut
          movie={movie}
          actions={tileActions}
          onClick={handleActionClick}
        />
      </ResultListItem>
    ),
    [movies]
  );

  return (
    <ResultListComponent totalAmount={totalAmount}>
      {movies.map(getResultListItems)}
    </ResultListComponent>
  );
}

ResultListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalAmount: PropTypes.number.isRequired,
  setFormSelectedMovie: PropTypes.func.isRequired,
  setFormAction: PropTypes.func.isRequired,
  setIsOpenedModal: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
};
