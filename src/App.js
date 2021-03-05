import SpinnerComponent from '@components/SpinnerComponent/SpinnerComponent';
import StatusTypes from '@constants/StatusTypes';
import FooterContainer from '@containers/FooterContainer/FooterContainer';
import HeaderNavContainer from '@containers/HeaderNavContainer/HeaderNavContainer';
import SiteContainer from '@containers/SiteContainer/SiteContainer';
import useModalState, { ModalDispatchActions } from '@hooks/UseModalState';
import {
  Actions,
  defaultModalContext,
  ModalContext,
} from '@services/ModalContext';
import { selectMovieSuccessCreator } from '@store/action-creators/moviesActionCreators';
import { moviesStateSelector } from '@store/selectors/moviesSelectors';
import {
  addMovie,
  deleteMovie,
  fetchMovies,
  updateMovie,
} from '@store/thunks/moviesThunk';
import getSerializedModalFormInputs from '@utils/getSerializedModalFormInputs';
import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { connect } from 'react-redux';

const LazyModalFormContainer = lazy(() => import('@containers/ModalFormContainer/ModalFormContainer'));

function App({ movies, dispatch }) {
  const [modalState, dispatchModalAction] = useModalState(
    defaultModalContext
  );

  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    dispatch(fetchMovies());
  }, [movies.sortBy, movies.filter]);

  useEffect(() => {
    setModalTitle(
      modalState.action !== Actions.CONFIRM ? `${modalState.action} movie` : ' '
    );
  }, [modalState.action]);

  const handleFormSubmit = useCallback(() => {
    const { action, formInputs, movie } = modalState;
    if (action === Actions.DELETE) {
      dispatch(deleteMovie(movie.id));
    }

    if (action === Actions.EDIT) {
      dispatch(
        updateMovie({ ...movie, ...getSerializedModalFormInputs(formInputs) })
      );
    }

    if (action === Actions.ADD) {
      dispatch(addMovie(getSerializedModalFormInputs(formInputs)));
    }

    dispatchModalAction({ type: ModalDispatchActions.CLOSE });
  }, [modalState.formInputs, modalState.movie]);

  const memoizedSiteContainer = useMemo(
    () => (
      <SiteContainer movies={movies.movies} selectedMovie={movies.selectedMovie} />
    ),
    [movies.movies, movies.selectedMovie]
  );

  return (
    <>
      <ModalContext.Provider value={{ modalState, dispatchModalAction }}>
        <HeaderNavContainer
          hasSearch={!!movies.selectedMovie}
          hasBackground={!!movies.selectedMovie}
          onSearch={() => dispatch(selectMovieSuccessCreator(null))}
        />
        {memoizedSiteContainer}

        {movies.status === StatusTypes.LOADING && <SpinnerComponent />}

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

      {useMemo(
        () => (
          <FooterContainer />
        ),
        []
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  movies: moviesStateSelector(state),
});

export default connect(mapStateToProps)(App);
