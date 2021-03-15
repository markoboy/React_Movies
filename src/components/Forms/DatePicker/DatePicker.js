/* eslint-disable jsx-a11y/label-has-associated-control */
import withFormElementWrapper from '@components/HigherOrder/WithFormElementWrapper';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as ReactDatePicker } from 'react-date-picker/dist/entry.nostyle';
import FormLabel from '../FormLabel/FormLabel';
import './DatePicker.scss';

function DatePicker({
  value,
  onChange,
  required,
  label,
}) {
  return (
    <>
      <FormLabel label={label} />
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

DatePicker.defaultProps = {
  onChange: null,
  required: false,
  label: '',
};

DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
};

export default memo(withFormElementWrapper(DatePicker));
