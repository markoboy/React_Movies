import React from 'react';
import './SpinnerComponent.scss';

export default function SpinnerComponent() {
  return (
    <div className="spinner">
      <div className="spinner__circle" />
      <p>Loading...</p>
    </div>
  );
}
