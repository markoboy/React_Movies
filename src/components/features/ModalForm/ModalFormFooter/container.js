import {
  MODAL_FORM_ADD_ACTION,
  MODAL_FORM_EDIT_ACTION,
} from '@components/features/ModalForm/constants';
import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';
import ModalFormFooterComponent from './component';

function ModalFormFooterContainer({ action }) {
  const { hasResetButton, submitActionText } = useMemo(() => {
    let actionText;

    const resetButton = [
      MODAL_FORM_EDIT_ACTION,
      MODAL_FORM_ADD_ACTION,
    ].includes(action);

    switch (action) {
      case MODAL_FORM_EDIT_ACTION:
        actionText = 'Save';
        break;

      case MODAL_FORM_ADD_ACTION:
        actionText = 'Submit';
        break;

      default:
        actionText = 'Confirm';
        break;
    }

    return {
      hasResetButton: resetButton,
      submitActionText: actionText,
    };
  }, [action]);

  return (
    <ModalFormFooterComponent
      hasResetButton={hasResetButton}
      submitActionText={submitActionText}
    />
  );
}

ModalFormFooterContainer.propTypes = {
  action: PropTypes.string.isRequired,
};

export default memo(ModalFormFooterContainer);
