import PropTypes from 'prop-types';
import React from 'react';
import ResultCount from './ResultCount';

function ResultListComponent({ totalAmount, children }) {
  return (
    <>
      <ResultCount count={totalAmount} />
      <section className="section section--padding-bottom-only">
        <ul className="result-list">{children}</ul>
      </section>
    </>
  );
}

ResultListComponent.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};

export default ResultListComponent;
