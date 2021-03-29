/* eslint-disable jsx-a11y/label-has-associated-control */
import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import MultiSelect from 'react-multi-select-component';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

function SelectComponent({ options, value, helpers, placeholder, label }) {
  const overrideStrings = {
    selectSomeItems: placeholder,
  };

  return (
    <>
      <FormLabelComponent label={label} />
      <MultiSelect
        overrideStrings={overrideStrings}
        options={options}
        value={value || []}
        onChange={helpers.setValue}
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
  helpers: {},
  placeholder: '',
  label: '',
};

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(optionShape).isRequired,
  value: PropTypes.arrayOf(optionShape),

  // Helpers are from formik when the component is used with formik
  // eslint-disable-next-line react/forbid-prop-types
  helpers: PropTypes.object,

  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default memo(withFormElementWrapper(SelectComponent));
