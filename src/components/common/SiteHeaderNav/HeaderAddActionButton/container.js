import { MODAL_FORM_ADD_ACTION } from '@components/features/ModalForm/constants';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import HeaderAddActionButtonComponent from './component';

function HeaderAddActionButtonContainer({ setFormAction, setIsOpenedModal }) {
  const handleHeaderAddClick = useCallback(() => {
    setFormAction(MODAL_FORM_ADD_ACTION);
    setIsOpenedModal(true);
  }, []);

  return <HeaderAddActionButtonComponent onClick={handleHeaderAddClick} />;
}

HeaderAddActionButtonContainer.propTypes = {
  setFormAction: PropTypes.func.isRequired,
  setIsOpenedModal: PropTypes.func.isRequired,
};

export default HeaderAddActionButtonContainer;
