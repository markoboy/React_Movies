import SiteFooter from '@components/common/SiteFooter';
import SiteHeaderNav from '@components/common/SiteHeaderNav';
import Spinner from '@components/common/Spinner';
import Notification from '@components/features/Notification';
import SiteContainer from '@components/features/SiteContainer';
import { MovieDetailType } from '@constants/MovieTypes';
import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';

const LazyModalFormContainer = lazy(() => import('@components/features/ModalForm'));

function AppComponent({
  selectedMovie,
  onSearch,
  showSpinner,
  modalIsOpened,
}) {
  return (
    <>
      <SiteHeaderNav
        hasSearch={!!selectedMovie}
        hasBackground={!!selectedMovie}
        onSearch={onSearch}
      />
      <SiteContainer />

      {showSpinner && <Spinner />}

      {modalIsOpened && (
        <Suspense fallback={<Spinner />}>
          <LazyModalFormContainer />
        </Suspense>
      )}

      <Notification />

      <SiteFooter />
    </>
  );
}

AppComponent.defaultProps = {
  selectedMovie: null,
};

AppComponent.propTypes = {
  selectedMovie: PropTypes.shape(MovieDetailType),
  onSearch: PropTypes.func.isRequired,
  showSpinner: PropTypes.bool.isRequired,
  modalIsOpened: PropTypes.bool.isRequired,
};

export default AppComponent;
