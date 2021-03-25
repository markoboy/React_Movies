import React, { memo } from 'react';
import PropTypes from 'prop-types';

function FormLabelComponent({ label, id }) {
  return label && <label className="form__label" htmlFor={id}>{label}</label>;
}

FormLabelComponent.defaultProps = {
  label: '',
  id: '',
};

FormLabelComponent.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default memo(FormLabelComponent);
