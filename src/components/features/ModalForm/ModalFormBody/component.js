import FormInputs from '@components/features/ModalForm/FormInputs';
import PropTypes from 'prop-types';
import React from 'react';
import { MODAL_FORM_EDIT_PARAGRAPH } from '../constants';

function ModalFormBodyComponent({ hasFormBody, hasDeleteBody }) {
  return (
    <>
      {hasFormBody && <FormInputs />}
      {hasDeleteBody && <p>{MODAL_FORM_EDIT_PARAGRAPH}</p>}
    </>
  );
}

ModalFormBodyComponent.propTypes = {
  hasFormBody: PropTypes.bool.isRequired,
  hasDeleteBody: PropTypes.bool.isRequired,
};

export default ModalFormBodyComponent;
