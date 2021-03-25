import BrandLogo from '@components/common/BrandLogo';
import { MODAL_FORM_ADD_ACTION } from '@components/features/ModalForm/constants';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import SiteHeaderNavComponent from './component';
import HeaderAddActionButton from './HeaderAddActionButton';
import HeaderSearchActionButton from './HeaderSearchActionButton';

export default function SiteHeaderNavContainer({
  hasBackground,
  onSearch,
  hasSearch,
  setFormAction,
  setIsOpenedModal,
}) {
  const handleHeaderAddClick = useCallback(() => {
    setFormAction(MODAL_FORM_ADD_ACTION);
    setIsOpenedModal(true);
  }, []);

  const actionButton = hasSearch ? (
    <HeaderSearchActionButton onClick={onSearch} />
  ) : (
    <HeaderAddActionButton onClick={handleHeaderAddClick} />
  );

  return (
    <SiteHeaderNavComponent
      headerLogo={<BrandLogo />}
      actionButton={actionButton}
      hasBackground={hasBackground}
    />
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
  setFormAction: PropTypes.func.isRequired,
  setIsOpenedModal: PropTypes.func.isRequired,
};
