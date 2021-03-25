import {
  MODAL_ADD_TITLE,
  MODAL_DELETE_TITLE,
  MODAL_EDIT_TITLE,
  MODAL_FORM_ADD_ACTION,
  MODAL_FORM_DELETE_ACTION,
  MODAL_FORM_EDIT_ACTION,
  MODAL_FORM_EDIT_PARAGRAPH,
} from '@constants/Modal';
import FormInputs from '@components/ModalForm/FormInputs';
import { setModalTitleCreator } from '@store/action-creators/modalActionCreators';
import { setFormInputsCreator } from '@store/action-creators/modalFormActionCreators';
import {
  modalFormActionSelector,
  modalFormInputsSelector,
  modalFormSelectedMovieSelector,
} from '@store/selectors/modalFormSelectors';
import getModalFormInputs from '@utils/getModalFormInputs';
import React, { memo, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

function ModalFormBodyContainer({ action, selectedMovie, dispatch }) {
  const formInputs = useMemo(() => getModalFormInputs(selectedMovie), [selectedMovie]);

  const [hasDeleteBody, hasFormBody] = useMemo(() => {
    const deleteBody = action === MODAL_FORM_DELETE_ACTION;
    const formBody = [MODAL_FORM_ADD_ACTION, MODAL_FORM_EDIT_ACTION].includes(action);

    return [deleteBody, formBody];
  }, [action]);

  useEffect(() => {
    switch (action) {
      case MODAL_FORM_ADD_ACTION:
        dispatch(setModalTitleCreator(MODAL_ADD_TITLE));
        dispatch(setFormInputsCreator(formInputs));
        break;

      case MODAL_FORM_EDIT_ACTION:
        dispatch(setModalTitleCreator(MODAL_EDIT_TITLE));
        dispatch(setFormInputsCreator(formInputs));
        break;

      case MODAL_FORM_DELETE_ACTION:
        dispatch(setModalTitleCreator(MODAL_DELETE_TITLE));
        break;

      default:
        break;
    }
  }, [action]);

  return (
    <>
      {hasFormBody && <FormInputs />}
      {hasDeleteBody && (
        <p>{MODAL_FORM_EDIT_PARAGRAPH}</p>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  action: modalFormActionSelector(state),
  selectedMovie: modalFormSelectedMovieSelector(state),
  formInputs: modalFormInputsSelector(state),
});

export default connect(mapStateToProps)(memo(ModalFormBodyContainer));
