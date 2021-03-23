import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ResultCount({ count }) {
  return (
    <p>
      <span className="font--bold">{count}</span>
      {' '}
      movies found
    </p>
  );
}

ResultCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default memo(ResultCount);
