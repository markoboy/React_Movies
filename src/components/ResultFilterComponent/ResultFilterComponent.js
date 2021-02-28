import React from 'react';
import './ResultFilterComponent.scss';

export default function ResultFilterComponent({ children }) {
  return <ul className="result-filter flex">{children}</ul>;
}
