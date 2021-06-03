import withSubRoutes from '@components/hocs/WithSubRoutes';
import loadable from '@loadable/component';
import React from 'react';
import { Route } from 'react-router-dom';

export const HOME_PATH = ['/', '/search/:query'];
export const FILM_PATH = ['/film/:id'];

const routes = [
  {
    path: HOME_PATH.concat(...FILM_PATH),
    component: loadable(() => import(/* webpackPreload: true */ '@components/features/PageLayout')),
    exact: true,
    routes: [
      {
        path: HOME_PATH,
        component: loadable(() => import(/* webpackPreload: true */ '@pages/Search')),
        exact: true,
      },
      {
        path: FILM_PATH,
        component: loadable(() => import(/* webpackPrefetch: true */ '@pages/Film')),
        exact: true,
      },
    ],
  },
  {
    path: '*',
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/NotFound')),
    status: 404,
  },
];

export const getRouteElement = (route) => (
  <Route
    key={`app-route-${route.path}`}
    path={route.path}
    render={withSubRoutes(route)}
    exact={route.exact}
    status={route.status}
  />
);

export default routes;
