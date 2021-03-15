import getDisplayName from '@utils/getDisplayName';
import clsx from 'clsx';
import React, { useMemo } from 'react';

export default function withSection(Component, { classes } = {}) {
  function WithSectionComponent({ ...props }) {
    const className = useMemo(() => clsx('section', classes), [classes]);

    return (<section className={className}><Component {...props} /></section>);
  }

  WithSectionComponent.displayName = `WithSection${getDisplayName(Component)}`;

  return WithSectionComponent;
}
