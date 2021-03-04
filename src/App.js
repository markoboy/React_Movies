import SpinnerComponent from '@components/SpinnerComponent/SpinnerComponent';
import FooterContainer from '@containers/FooterContainer/FooterContainer';
import HeaderNavContainer from '@containers/HeaderNavContainer/HeaderNavContainer';
import SiteContainer from '@containers/SiteContainer/SiteContainer';
import useModalState, { ModalDispatchActions } from '@hooks/UseModalState';
import useMoviesState, { MoviesDispatchActions } from '@hooks/UseMoviesState';
import useSelectedMovie from '@hooks/UseSelectedMovie';
import { ApplicationContext } from '@services/ApplicationContext';
import {
  Actions,
  defaultModalContext,
  ModalContext,
} from '@services/ModalContext';
import MovieService from '@services/MovieService';
import React, {
  lazy, Suspense, useEffect, useMemo, useState
} from 'react';

const LazyModalFormContainer = lazy(() => import('@containers/ModalFormContainer/ModalFormContainer'));

export default function App() {
  const [movies, dispatchMovieAction] = useMoviesState([]);

  const [modalState, dispatchModalAction] = useModalState(defaultModalContext, dispatchMovieAction);

  const [modalTitle, setModalTitle] = useState('');

  const { selectedMovie, selectedMovieId, setSelectedMovieId } = useSelectedMovie();

  useEffect(() => {
    const moviesResponse = MovieService.getMovies();
    dispatchMovieAction({ type: MoviesDispatchActions.INIT, payload: moviesResponse });
  }, []);

  useEffect(() => {
    setModalTitle(
      modalState.action !== Actions.CONFIRM ? `${modalState.action} movie` : ' '
    );
  }, [modalState.action]);

  const memoizedSiteContainer = useMemo(() => (
    <SiteContainer movies={movies} selectedMovie={selectedMovie} />
  ), [movies, selectedMovie]);

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
              onSubmit={() => (
                dispatchModalAction({ type: ModalDispatchActions.SUBMIT })
              )}
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
