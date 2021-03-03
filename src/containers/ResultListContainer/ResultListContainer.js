import withSection from '@components/HigherOrder/WithSection';
import ResultCountComponent from '@components/ResultCountComponent/ResultCountComponent';
import ResultItemPopOutComponent from '@components/ResultItemPopOutComponent/ResultItemPopOutComponent';
import ResultListComponent from '@components/ResultListComponent/ResultListComponent';
import ResultListItemComponent from '@components/ResultListItemComponent/ResultListItemComponent';
import { ModalDispatchActions } from '@hooks/UseModalState';
import { ApplicationContext } from '@services/ApplicationContext';
import { Actions, ModalContext } from '@services/ModalContext';
import getModalFormInputs from '@utils/getModalFormInputs';
import PropTypes from 'prop-types';
import React, { useContext, useMemo } from 'react';

const ResultListComponentWithSection = withSection(ResultListComponent, {
  classes: 'section--padding-bottom-only',
});

const modal = {
  deleteMessage: <p>Are you sure you want to delete this movie?</p>,
  confirmMessage: {
    delete: <p>Movie has been deleted.</p>,
    edit: <p>Movie has been updated.</p>,
  },
};

export default function ResultListContainer({ movies }) {
  const { setSelectedMovieId } = useContext(ApplicationContext);
  const { dispatchModalAction } = useContext(ModalContext);

  function handleActionClick(action, movie) {
    dispatchModalAction({
      type: ModalDispatchActions.OPEN,
      payload: {
        formInputs: action === Actions.EDIT ? getModalFormInputs(movie) : null,
        formBody: action === Actions.DELETE ? modal.deleteMessage : null,
        movie,
        action,
        successMessage:
          action === Actions.EDIT
            ? modal.confirmMessage.edit
            : modal.confirmMessage.delete,
      }
    });
  }

  const tileActions = useMemo(() => [Actions.EDIT, Actions.DELETE], []);

  return (
    <>
      <ResultCountComponent count={movies.length} />
      <ResultListComponentWithSection>
        {movies.map((movie) => (
          <ResultListItemComponent
            key={movie.id}
            onClick={() => setSelectedMovieId(movie.id)}
            {...movie}
          >
            {tileActions && tileActions.length && (
              <ResultItemPopOutComponent
                id={movie.id}
                actions={tileActions}
                onActionClick={(action) => handleActionClick(action, movie)}
              />
            )}
          </ResultListItemComponent>
        ))}
      </ResultListComponentWithSection>
    </>
  );
}

ResultListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
