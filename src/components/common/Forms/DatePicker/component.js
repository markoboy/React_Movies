import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Flatpickr from 'react-flatpickr';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

const flatpickrOptions = {
  dateFormat: 'd-M-Y',
};

function DatePickerComponent({ value, required, label, onChange }) {
  return (
    <>
      <FormLabelComponent label={label} />
      <Flatpickr
        value={value}
        onChange={onChange}
        options={flatpickrOptions}
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
