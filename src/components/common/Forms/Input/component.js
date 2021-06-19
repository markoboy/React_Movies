import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import PropTypes from 'prop-types';
import React from 'react';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

function InputComponent({
  classes,
  label,
  value,
  defaultValue,
  type,
  placeholder,
  name,
  id,
  required,
  pattern,
  disabled,
  onChange,
  onClick,
  onBlur,
  inputRef,
  children,
}) {
  return (
    <>
      <FormLabelComponent label={label} id={id} />
      <input
        ref={inputRef}
        className={classes}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        required={required}
        pattern={pattern}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
      />
      {children}
    </>
  );
}

InputComponent.defaultProps = {
  type: 'text',
  placeholder: undefined,
  name: undefined,
  id: undefined,
  classes: undefined,
  value: undefined,
  label: undefined,
  required: undefined,
  pattern: undefined,
  disabled: undefined,

  onChange: undefined,
  onClick: undefined,
  onBlur: undefined,
};

InputComponent.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  disabled: PropTypes.bool,

  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
};

export default withFormElementWrapper(InputComponent);
