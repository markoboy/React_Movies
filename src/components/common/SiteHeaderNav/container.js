import { FILM_PATH, getRouteElement, HOME_PATH } from '@components/App/routes';
import BrandLogo from '@components/common/BrandLogo';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Switch, useRouteMatch } from 'react-router';
import SiteHeaderNavComponent from './component';
import { HEADER_NAV_CONTAINER_CLASS } from './constants';
import HeaderAddActionButton from './HeaderAddActionButton';
import HeaderSearchActionButton from './HeaderSearchActionButton';

const actionButtonRoutes = [
  {
    path: HOME_PATH,
    component: HeaderAddActionButton,
    exact: true,
  },
  {
    path: FILM_PATH,
    component: HeaderSearchActionButton,
    exact: true,
  },
];

export default function SiteHeaderNavContainer() {
  const noBackground = useRouteMatch(HOME_PATH).isExact;

  const className = useMemo(
    () => (
      clsx(HEADER_NAV_CONTAINER_CLASS, {
        [`${HEADER_NAV_CONTAINER_CLASS}--with-bg`]: !noBackground,
      })
    ),
    [noBackground]
  );

  return (
    <SiteHeaderNavComponent
      headerLogo={<BrandLogo />}
      actionButton={<Switch>{actionButtonRoutes.map(getRouteElement)}</Switch>}
      classes={className}
    />
  );
}
