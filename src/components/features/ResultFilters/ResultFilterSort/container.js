/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useState } from 'react';
import ResultFilterSortComponent from './component';
import './styles.scss';

const getAvailableOption = (option) => (
  <option key={`result-filter-sort-${option.value}`} value={option.value}>
    {option.label}
  </option>
);

function ResultFilterSortContainer({ options, value, onChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(options.find((o) => o.value === value));
  }, [value]);

  const handleOnChange = useCallback(
    (event) => {
      const option = options.find((opt) => opt.value === event.target.value);
      onChange(option);
    },
    [options, onChange]
  );

  return (
    <ResultFilterSortComponent
      label={selectedOption?.label}
      onChange={handleOnChange}
    >
      {options.map(getAvailableOption)}
    </ResultFilterSortComponent>
  );
}

const optionType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

ResultFilterSortContainer.propTypes = {
  options: PropTypes.arrayOf(optionType).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(ResultFilterSortContainer);
