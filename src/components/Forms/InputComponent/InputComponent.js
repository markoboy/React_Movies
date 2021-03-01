import PropTypes from 'prop-types';
import React from 'react';
import './InputComponent.scss';

export default function InputComponent({
  type,
  placeholder,
  name,
  id,
  classes,
  value,
  onChange,
  onClick,
  label,
  required,
  pattern,
  disabled,
  children
}) {
  return (
    <div className="form-element-wrapper">
      {label && <label className="form__label" htmlFor={id}>{label}</label>}
      <input
        className={`form__input ${classes}`}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={(event) => onChange && onChange(event.target.value)}
        onClick={onClick}
        required={required}
        pattern={pattern}
        disabled={disabled}
      />
      {children}
    </div>
  );
}

InputComponent.defaultProps = {
  type: 'text',
  placeholder: '',
  name: '',
  id: '',
  classes: '',
  value: '',
  onChange: null,
  onClick: null,
  label: '',
  required: false,
  pattern: null,
  disabled: false,
};

InputComponent.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  disabled: PropTypes.bool,
};
