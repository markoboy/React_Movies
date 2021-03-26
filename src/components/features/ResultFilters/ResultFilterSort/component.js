/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function ResultFilterSortComponent({
  label,
  onChange,
  children,
}) {
  return (
    <div className="result-filter__select-wrapper">
      <label className="result-filter__sort-label" htmlFor="sort-options">
        Sort by
      </label>
      <span className="result-filter__select-value">{label}</span>
      <select
        className="result-filter__select"
        defaultValue={label}
        name="sort"
        id="sort-options"
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
}

ResultFilterSortComponent.defaultProps = {
  label: '',
};

ResultFilterSortComponent.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ResultFilterSortComponent;
