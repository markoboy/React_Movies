import Button from '@components/common/Forms/Button';
import Column from '@components/common/Grid/Column';
import Row from '@components/common/Grid/Row';
import PropTypes from 'prop-types';
import React from 'react';

function ModalFormFooterComponent({ hasResetButton, submitActionText }) {
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

ModalFormFooterComponent.propTypes = {
  hasResetButton: PropTypes.bool.isRequired,
  submitActionText: PropTypes.string.isRequired,
};

export default ModalFormFooterComponent;
