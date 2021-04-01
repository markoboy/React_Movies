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
}) {
  const handleActionClick = useCallback((action, movie) => {
    setFormSelectedMovie(movie);
    setFormAction(action);
    setIsOpenedModal(true);
  }, []);

  const getResultListItems = useCallback(
    (movie) => (
      <ResultListItem key={movie.id} {...movie}>
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
};
