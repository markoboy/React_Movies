import clsx from 'clsx';
import React, { useMemo } from 'react';
import ButtonComponent from './component';

function ButtonContainer({ children, type, classes, tabIndex, onClick }) {
  const className = useMemo(() => clsx('btn', classes), [classes]);

  return (
    <ButtonComponent
      type={type}
      classes={className}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </ButtonComponent>
  );
}

ButtonContainer.defaultProps = ButtonComponent.defaultProps;

ButtonContainer.propTypes = ButtonComponent.propTypes;

export default ButtonContainer;
