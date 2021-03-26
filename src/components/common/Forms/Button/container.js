import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import ButtonComponent from './component';

function ButtonContainer({
  children,
  type,
  classes,
  onClick,
}) {
  const className = useMemo(() => clsx('btn', classes), [classes]);

  return (
    <ButtonComponent type={type} classes={className} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}

ButtonContainer.defaultProps = {
  type: 'button',
  classes: '',
  onClick: null,
};

ButtonContainer.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonContainer;
