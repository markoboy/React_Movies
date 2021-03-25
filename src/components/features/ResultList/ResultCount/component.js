import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ResultCountComponent({ count }) {
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

export default memo(ResultCountComponent);
