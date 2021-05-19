import { LOADING_STATUS } from '@constants/StatusTypes';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';
import AppComponent from './component';
import appRoutes from './routes';

export default function AppContainer({ status, modalIsOpened, routes }) {
  const showSpinner = useMemo(() => status === LOADING_STATUS, [status]);

  const location = useLocation();

  useEffect(() => {
    window.document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <AppComponent
      showSpinner={showSpinner}
      modalIsOpened={modalIsOpened}
      routes={routes}
    />
  );
}

AppContainer.defaultProps = {
  routes: appRoutes,
};

AppContainer.propTypes = {
  status: PropTypes.string.isRequired,
  modalIsOpened: PropTypes.bool.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object),
};
