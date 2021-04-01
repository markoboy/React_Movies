import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import PropTypes from 'prop-types';
import React from 'react';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

function InputComponent({
  classes,
  label,
  value,
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
  children,
}) {
  return (
    <>
      <FormLabelComponent label={label} id={id} />
      <input
        className={classes}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value || ''}
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
  placeholder: '',
  name: '',
  id: '',
  classes: '',
  value: '',
  label: '',
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