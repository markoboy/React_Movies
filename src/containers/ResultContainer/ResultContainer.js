import withWrapper from '@components/HigherOrder/WithWrapper';
import ErrorBoundary from '@containers/ErrorBoundary/ErrorBoundary';
import ResultFilterContainer from '@containers/ResultFilterContainer/ResultFilterContainer';
import ResultListContainer from '@containers/ResultListContainer/ResultListContainer';
import React from 'react';
import PropTypes from 'prop-types';

const ResultFilterContainerWithWrapper = withWrapper(ResultFilterContainer);
const ResultListContainerWithWrapper = withWrapper(ResultListContainer);

export default function ResultContainer({ movies }) {
  return (
    <div className="background--black flex flex--column flex--grow">
      <ResultFilterContainerWithWrapper />
      <ErrorBoundary>
        <ResultListContainerWithWrapper movies={movies} />
      </ErrorBoundary>
    </div>
  );
}

ResultContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
