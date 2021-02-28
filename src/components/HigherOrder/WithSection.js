import React from 'react';

export default function withSection(Component, { classes } = {}) {
  return function WithSectionComponent({ ...props }) {
    return (<section className={`section ${classes}`}><Component {...props} /></section>);
  };
}
