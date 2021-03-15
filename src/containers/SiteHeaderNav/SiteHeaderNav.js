import BrandLogo from '@components/BrandLogo';
import Header from '@components/HeaderNav';
import { MODAL_FORM_ADD_ACTION } from '@constants/Modal';
import { setIsOpenedModalCreator } from '@store/action-creators/modalActionCreators';
import { setFormActionCreator } from '@store/action-creators/modalFormActionCreators';
import PropTypes from 'prop-types';
import React, {
  memo,
  useCallback,
} from 'react';
import { connect } from 'react-redux';
import HeaderAddActionButton from './HeaderAddActionButton';
import HeaderSearchActionButton from './HeaderSearchActionButton';

function SiteHeaderNav({
  hasBackground,
  onSearch,
  hasSearch,
  dispatch,
}) {
  const handleHeaderAddClick = useCallback(() => {
    dispatch(setFormActionCreator(MODAL_FORM_ADD_ACTION));
    dispatch(setIsOpenedModalCreator(true));
  }, []);

  const actionButton = hasSearch ? (
    <HeaderSearchActionButton onClick={onSearch} />
  ) : (
    <HeaderAddActionButton
      onClick={handleHeaderAddClick}
    />
  );

  return (
    <>
      <Header
        headerLogo={<BrandLogo />}
        actionButton={actionButton}
        hasBackground={hasBackground}
      />
    </>
  );
}

SiteHeaderNav.defaultProps = {
  hasBackground: false,
  hasSearch: false,
};

SiteHeaderNav.propTypes = {
  hasBackground: PropTypes.bool,
  hasSearch: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
};

export default connect()(memo(SiteHeaderNav));
