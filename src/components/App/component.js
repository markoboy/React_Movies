import SiteFooter from '@components/common/SiteFooter';
import SiteHeaderNav from '@components/common/SiteHeaderNav';
import Spinner from '@components/common/Spinner';
import Notification from '@components/features/Notification';
import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { getRouteElement } from './routes';

const LazyModalFormContainer = lazy(() => (
  import(/* webpackPrefetch: true */ '@components/features/ModalForm')
));

function AppComponent({ modalIsOpened, showSpinner, routes }) {
  return (
    <>
      <SiteHeaderNav />

      <Suspense fallback={<Spinner />}>
        <Switch>{routes.map(getRouteElement)}</Switch>

        {modalIsOpened && <LazyModalFormContainer />}
      </Suspense>

      <Notification />

      <SiteFooter />

      {showSpinner && <Spinner />}
    </>
  );
}

AppComponent.propTypes = {
  modalIsOpened: PropTypes.bool.isRequired,
  showSpinner: PropTypes.bool.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AppComponent;
