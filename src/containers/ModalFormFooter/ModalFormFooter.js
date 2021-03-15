import Button from '@components/Forms/Button';
import Column from '@components/Grid/Column';
import Row from '@components/Grid/Row';
import {
  MODAL_FORM_ADD_ACTION,
  MODAL_FORM_EDIT_ACTION,
} from '@constants/Modal';
import React, { memo, useMemo } from 'react';

function ModalFormFooter({ action }) {
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
    <Row classes="justify-content--flex-end">
      {hasResetButton && (
        <Column classes="column--m-3">
          <Button type="reset" classes="btn--outline btn--full-width">
            Reset
          </Button>
        </Column>
      )}

      <Column classes="column--m-3">
        <Button type="submit" classes="btn--primary btn--full-width">
          {submitActionText}
        </Button>
      </Column>
    </Row>
  );
}

export default memo(ModalFormFooter);
