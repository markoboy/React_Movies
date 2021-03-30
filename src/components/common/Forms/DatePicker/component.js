import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import ReactDatePicker from 'react-date-picker/dist/entry.nostyle';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

function DatePickerComponent({ value, required, label, onChange }) {
  return (
    <>
      <FormLabelComponent label={label} />
      <ReactDatePicker
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
    </>
  );
}

DatePickerComponent.defaultProps = {
  required: false,
  label: '',
  value: '',
};

DatePickerComponent.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  required: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default memo(withFormElementWrapper(DatePickerComponent));
