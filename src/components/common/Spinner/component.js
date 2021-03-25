import React, { memo } from 'react';
import './styles.scss';

function SpinnerComponent() {
  return (
    <div className="spinner">
      <div className="spinner__circle" />
      <p>Loading...</p>
    </div>
  );
}

export default memo(SpinnerComponent);
