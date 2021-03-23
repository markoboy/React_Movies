import withFormElementWrapper from '@components/HigherOrder/WithFormElementWrapper';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import FormLabel from '../FormLabel/FormLabel';
import './Input.scss';

function Input({
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
  const className = useMemo(() => clsx('form__input', classes), [classes]);

  const handleChange = useCallback((event) => onChange && onChange(event.target.value), [onChange]);

  return (
    <>
      <FormLabel label={label} id={id} />
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        onClick={onClick}
        required={required}
        pattern={pattern}
        disabled={disabled}
      />
      {children}
    </>
  );
}

Input.defaultProps = {
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

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  disabled: PropTypes.bool,
};

export default withFormElementWrapper(Input);
