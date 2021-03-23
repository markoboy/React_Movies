import React, { memo } from 'react';
import './Spinner.scss';

function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner__circle" />
      <p>Loading...</p>
    </div>
  );
}

export default memo(Spinner);
