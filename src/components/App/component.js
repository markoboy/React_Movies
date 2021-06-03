import SiteFooter from '@components/common/SiteFooter';
import SiteHeaderNav from '@components/common/SiteHeaderNav';
import Spinner from '@components/common/Spinner';
import Notification from '@components/features/Notification';
import loadable from '@loadable/component';
import PropTypes from 'prop-types';
import React from 'react';
import { Switch } from 'react-router-dom';
import { getRouteElement } from './routes';

const LazyModalFormContainer = loadable(() => import(/* webpackPrefetch: true */ '@components/features/ModalForm'));

function AppComponent({ modalIsOpened, showSpinner, routes }) {
  return (
    <>
      <SiteHeaderNav />

      <Switch>{routes.map(getRouteElement)}</Switch>

      {modalIsOpened && <LazyModalFormContainer fallback={<Spinner />} />}

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
