import getDisplayName from '@utils/getDisplayName';
import React from 'react';

export default function withFormElementWrapper(Component) {
  function WithFormElementWrapperComponent({ ...props }) {
    return <div className="form-element-wrapper"><Component {...props} /></div>;
  }

  WithFormElementWrapperComponent.displayName = `WithFormElementWrapper${getDisplayName(Component)}`;

  return WithFormElementWrapperComponent;
}
