/* eslint-disable jsx-a11y/label-has-associated-control */
import withFormElementWrapper from '@components/HigherOrder/WithFormElementWrapper';
import React, { memo } from 'react';
import MultiSelect from 'react-multi-select-component';
import FormLabel from '../FormLabel/FormLabel';
import './Select.scss';

function Select({
  options,
  value,
  onChange,
  placeholder,
  label,
}) {
  const overrideStrings = {
    selectSomeItems: placeholder,
  };

  return (
    <>
      <FormLabel label={label} />
      <MultiSelect
        overrideStrings={overrideStrings}
        options={options}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default memo(withFormElementWrapper(Select));
