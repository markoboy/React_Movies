import getDisplayName from '@utils/getDisplayName';
import React from 'react';

export default function withSubRoutes({ ...route }) {
  function WithSubRoutesComponent({ ...props }) {
    return (
      <route.component
        {...props}
        route={{ routes: route.routes }}
      />
    );
  }

  WithSubRoutesComponent.displayName = `WithSubRoutes${getDisplayName(
    route.component
  )}`;

  return WithSubRoutesComponent;
}
