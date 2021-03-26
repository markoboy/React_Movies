import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import InputComponent from './component';

function InputContainer({
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
  children,
}) {
  const className = useMemo(() => clsx('form__input', classes), [classes]);

  const handleChange = useCallback(
    (event) => onChange && onChange(event.target.value),
    [onChange]
  );

  return (
    <InputComponent
      classes={className}
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
      label={label}
    >
      {children}
    </InputComponent>
  );
}

InputContainer.defaultProps = {
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

InputContainer.propTypes = {
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

export default withFormElementWrapper(InputContainer);
