import PropTypes from 'prop-types';
import React from 'react';
import { MODAL_FORM_DELETE_PARAGRAPH } from '../constants';
import FormikForm from '../FormikForm';
import ModalFormFooter from '../ModalFormFooter';

function ModalFormBodyComponent({
  hasFormBody,
  hasDeleteBody,
  selectedMovie,
  formAction,
  onSubmit,
}) {
  return (
    <>
      {hasFormBody && (
        <FormikForm selectedMovie={selectedMovie} onSubmit={onSubmit}>
          <ModalFormFooter action={formAction} />
        </FormikForm>
      )}

      {hasDeleteBody && (
        <form onSubmit={onSubmit}>
          <p>{MODAL_FORM_DELETE_PARAGRAPH}</p>
          <ModalFormFooter action={formAction} />
        </form>
      )}
    </>
  );
}

ModalFormBodyComponent.defaultProps = {
  selectedMovie: undefined,
};

ModalFormBodyComponent.propTypes = {
  hasFormBody: PropTypes.bool.isRequired,
  hasDeleteBody: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  selectedMovie: PropTypes.object,
  formAction: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalFormBodyComponent;
