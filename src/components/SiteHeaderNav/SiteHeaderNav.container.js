import BrandLogo from '@components/common/BrandLogo';
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
import SiteHeaderNavComponent from './SiteHeaderNav.component';

function SiteHeaderNavContainer({
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
      <SiteHeaderNavComponent
        headerLogo={<BrandLogo />}
        actionButton={actionButton}
        hasBackground={hasBackground}
      />
    </>
  );
}

SiteHeaderNavContainer.defaultProps = {
  hasBackground: false,
  hasSearch: false,
};

SiteHeaderNavContainer.propTypes = {
  hasBackground: PropTypes.bool,
  hasSearch: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
};

export default connect()(memo(SiteHeaderNavContainer));
