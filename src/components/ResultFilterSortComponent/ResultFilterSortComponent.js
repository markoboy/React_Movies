/* eslint-disable jsx-a11y/label-has-associated-control */
import ResultFilterComponent from '@components/ResultFilterComponent/ResultFilterComponent';
import PropTypes from 'prop-types';
import React from 'react';
import './ResultFilterSortComponent.scss';

export default function ResultFilterSortComponent({ options, selectedOption }) {
  return (
    <div className="result-filter__select-wrapper">
      <label className="result-filter__sort-label" htmlFor="sort-options">
        Sort by
      </label>
      <span className="result-filter__select-value">{selectedOption.sort}</span>
      <select
        className="result-filter__select"
        data-value={selectedOption.sort}
        defaultValue={selectedOption.sort}
        name="sort"
        id="sort-options"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.sort}>
            {opt.sort}
          </option>
        ))}
      </select>
    </div>
  );
}

const optionType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
});

ResultFilterComponent.propTypes = {
  options: PropTypes.arrayOf(optionType),
  selectedOption: optionType,
};
