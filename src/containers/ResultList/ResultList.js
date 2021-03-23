import withActionClick from '@components/HigherOrder/WithActionClick';
import withWrapper from '@components/HigherOrder/WithWrapper';
import ResultCount from '@components/ResultCount';
import ResultItemPopOut from '@components/ResultItemPopOut';
import ResultListItem from '@components/ResultListItem';
import { MODAL_FORM_DELETE_ACTION, MODAL_FORM_EDIT_ACTION } from '@constants/Modal';
import { setIsOpenedModalCreator } from '@store/action-creators/modalActionCreators';
import { setFormActionCreator, setFormSelectedMovieCreator } from '@store/action-creators/modalFormActionCreators';
import { moviesSelector, moviesTotalAmountSelector } from '@store/selectors/moviesSelectors';
import { selectMovie } from '@store/thunks/moviesThunk';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';

const tileActions = [MODAL_FORM_EDIT_ACTION, MODAL_FORM_DELETE_ACTION];

const WithActionClickResultListItemComponent = withActionClick(ResultListItem);

function ResultList({ movies, totalAmount, dispatch }) {
  const handleActionClick = useCallback((action, movie) => {
    dispatch(setFormSelectedMovieCreator(movie));
    dispatch(setFormActionCreator(action));
    dispatch(setIsOpenedModalCreator(true));
  }, []);

  const handleResultItemClick = useCallback((movieId) => {
    dispatch(selectMovie(movieId));
    window.document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getResultListItems = useCallback((movie) => (
    <WithActionClickResultListItemComponent
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
    </WithActionClickResultListItemComponent>
  ), [movies]);

  return (
    <>
      <ResultCount count={totalAmount} />
      <section className="section section--padding-bottom-only">
        <ul className="result-list">
          {movies.map(getResultListItems)}
        </ul>
      </section>
    </>
  );
}

ResultList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalAmount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  movies: moviesSelector(state),
  totalAmount: moviesTotalAmountSelector(state),
});

export default connect(mapStateToProps)(memo(withWrapper(ResultList)));
