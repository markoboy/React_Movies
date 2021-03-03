/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo } from 'react';
import MultiSelect from 'react-multi-select-component';
import './SelectComponent.scss';

export default function SelectComponent({
  options,
  value,
  onChange,
  placeholder,
  label,
}) {
  const overrideStrings = {
    selectSomeItems: placeholder,
  };

  return useMemo(() => (
    <div className="form-element-wrapper">
      {label && <label className="form__label">{label}</label>}
      <MultiSelect
        overrideStrings={overrideStrings}
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  ), [placeholder, options, value]);
}
