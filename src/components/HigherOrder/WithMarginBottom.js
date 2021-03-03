import React from 'react';

export default function withMarginBottom(Component, margin = '0.8em') {
  return function WithMarginBottomComponent({ ...props }) {
    return (
      <div style={{ marginBottom: margin }}>
        <Component {...props} />
      </div>
    );
  };
}
