/* eslint-disable jsx-a11y/label-has-associated-control */
import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as ReactDatePicker } from 'react-date-picker/dist/entry.nostyle';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

function DatePickerComponent({
  value,
  onChange,
  required,
  label,
}) {
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

export default memo(withFormElementWrapper(DatePickerComponent));
