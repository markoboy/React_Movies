import React from 'react';
import PropTypes from 'prop-types';

export default function ResultCountComponent({ count }) {
  return (
    <p>
      <span className="font--bold">{count}</span>
      {' '}
      movies found
    </p>
  );
}

ResultCountComponent.propTypes = {
  count: PropTypes.number.isRequired,
};
