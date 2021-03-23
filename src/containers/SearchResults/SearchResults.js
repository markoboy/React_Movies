import ResultNoFound from '@components/ResultNoFound';
import { LOADING_STATUS } from '@constants/StatusTypes';
import ErrorBoundary from '@containers/ErrorBoundary';
import ResultFilters from '@containers/ResultFilters';
import ResultList from '@containers/ResultList';
import { moviesStatusSelector, moviesTotalAmountSelector } from '@store/selectors/moviesSelectors';
import React from 'react';
import { connect } from 'react-redux';

function SearchResults({
  status,
  totalAmount,
}) {
  return (
    <div className="background--black flex flex--column flex--grow">
      <ResultFilters />
      {totalAmount > 0 ? (
        <ErrorBoundary>
          <ResultList />
        </ErrorBoundary>
      ) : (
        status !== LOADING_STATUS && <ResultNoFound />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: moviesStatusSelector(state),
  totalAmount: moviesTotalAmountSelector(state),
});

export default connect(mapStateToProps)(SearchResults);
