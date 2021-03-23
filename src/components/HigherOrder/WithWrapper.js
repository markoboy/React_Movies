import getDisplayName from '@utils/getDisplayName';
import React from 'react';

export default function withWrapper(Component) {
  function WithWrapperComponent({ ...props }) {
    return <div className="wrapper"><Component {...props} /></div>;
  }

  WithWrapperComponent.displayName = `WithWrapper${getDisplayName(Component)}`;

  return WithWrapperComponent;
}
