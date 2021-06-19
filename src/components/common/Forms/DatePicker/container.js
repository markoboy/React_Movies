import React, { useCallback, useRef } from 'react';
import DatePickerComponent from './component';

const flatpickrOptions = {
  dateFormat: 'd-M-Y',
  mode: 'single',
};

const DatePicker = ({ onChange, ...props }) => {
  const flatpickrInstance = useRef();

  const handleOnCreate = useCallback((flatpickr) => {
    flatpickrInstance.current = flatpickr;
  }, []);

  const handleOnDestroy = useCallback(() => {
    flatpickrInstance.current = null;
  }, []);

  const formatDate = useCallback((defaultDateValue, dateValue) => {
    if (typeof dateValue === 'string') {
      return dateValue;
    }

    const formatedDate = flatpickrInstance.current?.formatDate(
      dateValue,
      flatpickrOptions.dateFormat
    );

    return formatedDate || defaultDateValue || '';
  }, []);

  const handleDateChange = useCallback(
    (dates) => {
      onChange?.(dates[0]);
    },
    [onChange]
  );

  return (
    <DatePickerComponent
      onChange={handleDateChange}
      onCreate={handleOnCreate}
      onDestroy={handleOnDestroy}
      formatDate={formatDate}
      options={flatpickrOptions}
      {...props}
    />
  );
};

export default DatePicker;
