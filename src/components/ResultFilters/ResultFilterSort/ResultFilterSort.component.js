/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import './ResultFilterSort.component.scss';

const getAvailableOption = (option) => (
  <option key={`result-filter-sort-${option.value}`} value={option.value}>
    {option.label}
  </option>
);

function ResultFilterSortComponent({
  options,
  value,
  onChange,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(options.find((o) => o.value === value));
  }, [value]);

  const handleOnChange = useCallback((event) => {
    const option = options.find((opt) => opt.value === event.target.value);
    onChange(option);
  }, [options, onChange]);

  const availableOptions = useMemo(() => (
    options.map(getAvailableOption)
  ), [options]);

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
        {availableOptions}
      </select>
    </div>
  );
}

const optionType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

ResultFilterSortComponent.propTypes = {
  options: PropTypes.arrayOf(optionType).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(ResultFilterSortComponent);
