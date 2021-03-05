/* eslint-disable jsx-a11y/label-has-associated-control */
import ResultFilterComponent from '@components/ResultFilterComponent/ResultFilterComponent';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './ResultFilterSortComponent.scss';

export default function ResultFilterSortComponent({
  options,
  value,
  onChange,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(options.find((o) => o.value === value));
  }, [value]);

  function handleOnChange(event) {
    const option = options.find((opt) => opt.value === event.target.value);
    onChange(option);
  }

  return (
    <div className="result-filter__select-wrapper">
      <label className="result-filter__sort-label" htmlFor="sort-options">
        Sort by
      </label>
      <span className="result-filter__select-value">{selectedOption?.label}</span>
      <select
        className="result-filter__select"
        defaultValue={selectedOption?.label}
        name="sort"
        id="sort-options"
        onChange={handleOnChange}
      >
        {options.map((opt) => (
          <option key={`result-filter-sort-${opt.value}`} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

const optionType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

ResultFilterComponent.propTypes = {
  options: PropTypes.arrayOf(optionType),
  value: PropTypes.string,
  onChange: PropTypes.func,
};
