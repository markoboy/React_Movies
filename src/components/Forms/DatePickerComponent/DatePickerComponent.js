/* eslint-disable jsx-a11y/label-has-associated-control */
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import './DatePickerComponent.scss';

export default function DatePickerComponent({
  value,
  onChange,
  required,
  label,
}) {
  return (
    <div className="form-element-wrapper">
      {label && <label className="form__label">{label}</label>}
      <DatePicker
        value={value}
        onChange={onChange}
        calendarIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
        clearIcon={null}
        format="dd-MM-y"
        dayPlaceholder="Day"
        monthPlaceholder="Month"
        yearPlaceholder="Year"
        required={required}
      />
    </div>
  );
}

DatePickerComponent.defaultProps = {
  onChange: null,
  required: false,
  label: '',
};

DatePickerComponent.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
};
