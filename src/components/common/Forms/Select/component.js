/* eslint-disable jsx-a11y/label-has-associated-control */
import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import MultiSelect from 'react-multi-select-component';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

function SelectComponent({ options, value, placeholder, label, onChange, }) {
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

const optionShape = PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
});

SelectComponent.defaultProps = {
  value: [],
  placeholder: '',
  label: '',
};

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(optionShape).isRequired,
  value: PropTypes.arrayOf(optionShape),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default memo(withFormElementWrapper(SelectComponent));
