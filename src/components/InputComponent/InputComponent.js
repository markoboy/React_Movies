import PropTypes from 'prop-types';
import React from 'react';
import './InputComponent.scss';

export default function InputComponent({
  type, placeholder, name, id, classes
}) {
  return <input className={`form__input ${classes}`} type={type} placeholder={placeholder} name={name} id={id} />;
}

InputComponent.defaultProps = {
  type: 'text',
  placeholder: '',
  name: '',
  id: '',
  classes: '',
};

InputComponent.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
};
