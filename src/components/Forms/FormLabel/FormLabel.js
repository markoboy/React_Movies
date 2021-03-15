import React, { memo } from 'react';
import PropTypes from 'prop-types';

function FormLabel({ label, id }) {
  return label && <label className="form__label" htmlFor={id}>{label}</label>;
}

FormLabel.defaultProps = {
  label: '',
  id: '',
};

FormLabel.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default memo(FormLabel);
