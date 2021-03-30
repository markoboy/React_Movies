import clsx from 'clsx';
import React, { memo, useMemo } from 'react';
import InputComponent from './component';

function InputContainer({ classes, children, ...props }) {
  const className = useMemo(() => clsx('form__input', classes), [classes]);

  return (
    <InputComponent classes={className} {...props}>
      {children}
    </InputComponent>
  );
}

InputContainer.defaultProps = InputComponent.defaultProps;

InputContainer.propTypes = InputComponent.propTypes;

export default memo(InputContainer);
