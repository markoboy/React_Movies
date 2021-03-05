import SpinnerComponent from '@components/SpinnerComponent/SpinnerComponent';
import FooterContainer from '@containers/FooterContainer/FooterContainer';
import HeaderNavContainer from '@containers/HeaderNavContainer/HeaderNavContainer';
import SiteContainer from '@containers/SiteContainer/SiteContainer';
import useModalState, { ModalDispatchActions } from '@hooks/UseModalState';
import useSelectedMovie from '@hooks/UseSelectedMovie';
import { ApplicationContext } from '@services/ApplicationContext';
import {
  Actions,
  defaultModalContext,
  ModalContext
} from '@services/ModalContext';
import { addMovieAsync, deleteMovieAsync, getMovies, updateMovieAsync } from '@store/actions/moviesActions';
import getSerializedModalFormInputs from '@utils/getSerializedModalFormInputs';
import React, {
  lazy, Suspense, useCallback, useEffect, useMemo, useState
} from 'react';
import { connect } from 'react-redux';

const LazyModalFormContainer = lazy(() => import('@containers/ModalFormContainer/ModalFormContainer'));

function App({ movies, dispatch }) {
  const [modalState, dispatchModalAction] = useModalState(defaultModalContext, dispatch);

  const [modalTitle, setModalTitle] = useState('');

  const { selectedMovie, selectedMovieId, setSelectedMovieId } = useSelectedMovie();

  useEffect(() => {
    dispatch(getMovies());
  }, [movies.sortBy, movies.filter]);

  useEffect(() => {
    setModalTitle(
      modalState.action !== Actions.CONFIRM ? `${modalState.action} movie` : ' '
    );
  }, [modalState.action]);

  const handleFormSubmit = useCallback(() => {
    const { action, formInputs, movie } = modalState;
    if (action === Actions.DELETE) {
      dispatch(deleteMovieAsync(movie.id));
    }

    if (action === Actions.EDIT) {
      dispatch(updateMovieAsync({ ...movie, ...getSerializedModalFormInputs(formInputs) }));
    }

    if (action === Actions.ADD) {
      dispatch(addMovieAsync(getSerializedModalFormInputs(formInputs)));
    }
  }, [modalState.formInputs, modalState.movie]);

  const memoizedSiteContainer = useMemo(() => (
    <SiteContainer movies={movies.movies} selectedMovie={selectedMovie} />
  ), [movies.movies, selectedMovie]);

  return (
    <>
      <ModalContext.Provider value={{ modalState, dispatchModalAction }}>
        <ApplicationContext.Provider
          value={{ selectedMovieId, setSelectedMovieId }}
        >
          <HeaderNavContainer
            hasSearch={!!selectedMovieId}
            hasBackground={!!selectedMovieId}
            onSearch={() => setSelectedMovieId(null)}
          />
          {memoizedSiteContainer}
        </ApplicationContext.Provider>

        {modalState.isOpened && (
          <Suspense fallback={<SpinnerComponent />}>
            <LazyModalFormContainer
              title={modalTitle}
              actionButtons={modalState[modalState.action]}
              formBody={modalState.formBody}
              formInputs={modalState.formInputs}
              onCancel={() => (
                dispatchModalAction({ type: ModalDispatchActions.CLOSE })
              )}
              onSubmit={handleFormSubmit}
              onReset={() => (
                dispatchModalAction({ type: ModalDispatchActions.RESET })
              )}
              onChange={(input, value) => (
                dispatchModalAction({
                  type: ModalDispatchActions.CHANGE,
                  payload: { input, value },
                })
              )}
            />
          </Suspense>
        )}
      </ModalContext.Provider>

      {useMemo(() => <FooterContainer />, [])}
    </>
  );
}

const mapStateToProps = (state) => {
  const { movies } = state;

  return {
    movies,
  };
};

export default connect(mapStateToProps)(App);
