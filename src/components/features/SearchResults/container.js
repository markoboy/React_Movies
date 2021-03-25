import PropTypes from 'prop-types';
import React from 'react';
import SearchResultsComponent from './component';

export default function SearchResultsContainer({ status, totalAmount }) {
  return <SearchResultsComponent status={status} totalAmount={totalAmount} />;
}

SearchResultsContainer.propTypes = {
  status: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired,
};
