import Spinner from '@components/Spinner';
import { LOADING_STATUS } from '@constants/StatusTypes';
import SiteFooter from '@containers/SiteFooter';
import SiteHeaderNav from '@containers/SiteHeaderNav';
import SiteContainer from '@containers/SiteContainer';
import { selectMovieSuccessCreator } from '@store/action-creators/moviesActionCreators';
import { modalIsOpenedSelector } from '@store/selectors/modalSelectors';
import {
  moviesFilterSelector,
  moviesSortBySelector,
  moviesStatusSelector,
  selectedMovieSelector,
} from '@store/selectors/moviesSelectors';
import { fetchMovies } from '@store/thunks/moviesThunk';
import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { connect } from 'react-redux';
import Notification from '@containers/Notification';

const LazyModalFormContainer = lazy(() => import('@containers/ModalForm/ModalForm'));

function App({
  sortBy,
  filter,
  selectedMovie,
  status,
  modalIsOpened,
  dispatch,
}) {
  useEffect(() => {
    dispatch(fetchMovies());
  }, [sortBy, filter]);

  const handleOnSearch = useCallback(() => {
    dispatch(selectMovieSuccessCreator(null));
  }, []);

  const showSpinner = useMemo(() => status === LOADING_STATUS, [status]);

  return (
    <>
      <SiteHeaderNav
        hasSearch={!!selectedMovie}
        hasBackground={!!selectedMovie}
        onSearch={handleOnSearch}
      />
      <SiteContainer />

      {showSpinner && <Spinner />}

      {modalIsOpened && (
        <Suspense fallback={<Spinner />}>
          <LazyModalFormContainer />
        </Suspense>
      )}

      <Notification />

      <SiteFooter />
    </>
  );
}

const mapStateToProps = (state) => ({
  sortBy: moviesSortBySelector(state),
  filter: moviesFilterSelector(state),
  selectedMovie: selectedMovieSelector(state),
  status: moviesStatusSelector(state),
  modalIsOpened: modalIsOpenedSelector(state),
});

export default connect(mapStateToProps)(App);
