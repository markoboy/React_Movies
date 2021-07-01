import Input from '@components/common/Forms/Input';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import Flatpickr from 'react-flatpickr';
import './styles.scss';

const noop = () => {};

function DatePickerComponent({
  id,
  name,
  defaultValue,
  required,
  label,
  placeholder,
  options,
  onChange,
  onCreate,
  onDestroy,
  formatDate,
}) {
  return (
    <Flatpickr
      value={defaultValue}
      onChange={onChange}
      onCreate={onCreate}
      onDestroy={onDestroy}
      options={options}
      // Render props
      render={({ value: dateValue, defaultValue: defaultDate }, ref) => (
        <Input
          inputRef={ref}
          id={id}
          name={name}
          value={formatDate(defaultDate, dateValue)}
          label={label}
          placeholder={placeholder}
          required={required}
          // Required else an error about read-only field
          onChange={noop}
        >
          <FontAwesomeIcon
            className="date-picker__calendar-button"
            icon={faCalendarAlt}
          />
        </Input>
      )}
    />
  );
}

DatePickerComponent.defaultProps = {
  required: false,
  label: '',
  defaultValue: '',
};

DatePickerComponent.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  required: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default DatePickerComponent;
