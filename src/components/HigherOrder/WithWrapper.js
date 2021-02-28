import React from 'react';

export default function withWrapper(Component) {
  return function WithWrapperComponent({ ...props }) {
    return <div className="wrapper"><Component {...props} /></div>;
  };
}
