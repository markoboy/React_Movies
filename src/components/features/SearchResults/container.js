import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchResultsComponent from './component';

function SearchResultsContainer({ totalAmount, status, sortBy, filter, invalidate, fetchMovies }) {
  const { query = '' } = useParams();

  useEffect(() => {
    fetchMovies({ search: query });
  }, [sortBy, filter, query, invalidate]);

  return <SearchResultsComponent totalAmount={totalAmount} status={status} />;
}

SearchResultsContainer.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidate: PropTypes.number.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

export default SearchResultsContainer;
