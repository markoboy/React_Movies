import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import PropTypes from 'prop-types';
import React from 'react';
import FormLabelComponent from '../FormLabel';
import './styles.scss';

function InputComponent({ classes, label, value, children, ...props }) {
  return (
    <>
      <FormLabelComponent label={label} id={props.id} />
      <input className={classes} value={value || ''} {...props} />
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  disabled: PropTypes.bool,
};

export default withFormElementWrapper(InputComponent);
