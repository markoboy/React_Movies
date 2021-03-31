import { getRouteElement } from '@components/App/routes';
import SearchResults from '@components/features/SearchResults';
import SiteContainer from '@components/features/SiteContainer';
import React from 'react';
import { Switch } from 'react-router-dom';

export default function PageLayoutComponent({ route }) {
  return (
    <SiteContainer>
      <Switch>{route.routes.map(getRouteElement)}</Switch>

      <SearchResults />
    </SiteContainer>
  );
}
