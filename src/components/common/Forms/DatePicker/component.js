import Input from '@components/common/Forms/Input';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Flatpickr from 'react-flatpickr';
import './styles.scss';

const flatpickrOptions = {
  dateFormat: 'd-M-Y',
};

const noop = () => {};

function DatePickerComponent({
  value,
  required,
  label,
  placeholder,
  onChange,
}) {
  return (
    <>
      <Flatpickr
        value={value}
        onChange={(dates) => onChange?.(dates[0])}
        options={flatpickrOptions}
        render={({ defaultValue }, ref) => (
          <Input
            inputRef={ref}
            defaultValue={defaultValue}
            label={label}
            placeholder={placeholder}
            required={required}
            onChange={noop}
          >
            <FontAwesomeIcon className="date-picker__calendar-button" icon={faCalendarAlt} />
          </Input>
        )}
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

export default memo(DatePickerComponent);
