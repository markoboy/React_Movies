import ErrorBoundary from '@components/common/ErrorBoundary';
import ResultNoFound from '@components/common/ResultNoFound';
import { LOADING_STATUS } from '@constants/StatusTypes';
import PropTypes from 'prop-types';
import React from 'react';
import ResultFilters from '../ResultFilters';
import ResultList from '../ResultList';

function SearchResultsComponent({ totalAmount, status }) {
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

SearchResultsComponent.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default SearchResultsComponent;
