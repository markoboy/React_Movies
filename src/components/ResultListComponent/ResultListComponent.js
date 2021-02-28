import React from 'react';
import './ResultListComponent.scss';

export default function ResultListComponent({ children }) {
  return <ul className="result-list">{children}</ul>;
}
