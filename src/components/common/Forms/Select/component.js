/* eslint-disable jsx-a11y/label-has-associated-control */
import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import React, { memo } from 'react';
import MultiSelect from 'react-multi-select-component';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

function SelectComponent({
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
      <FormLabelComponent label={label} />
      <MultiSelect
        overrideStrings={overrideStrings}
        options={options}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default memo(withFormElementWrapper(SelectComponent));
