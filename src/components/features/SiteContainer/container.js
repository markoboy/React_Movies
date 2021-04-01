import clsx from 'clsx';
import React, { useMemo } from 'react';
import SiteContainerComponent from './component';

function SiteContainerContainer({ classes, children }) {
  const className = useMemo(() => clsx('site-container__main flex flex--column', classes), [
    classes,
  ]);

  return (
    <SiteContainerComponent classes={className}>
      {children}
    </SiteContainerComponent>
  );
}

SiteContainerContainer.defaultProps = SiteContainerComponent.defaultProps;

SiteContainerContainer.propTypes = SiteContainerComponent.propTypes;

export default SiteContainerContainer;
