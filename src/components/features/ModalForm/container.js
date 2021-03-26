import Modal from '@components/common/Modal';
import {
  MODAL_FORM_ADD_ACTION,
  MODAL_FORM_DELETE_ACTION,
  MODAL_FORM_EDIT_ACTION,
} from '@components/features/ModalForm/constants';
import ModalFormBody from '@components/features/ModalForm/ModalFormBody';
import ModalFormFooter from '@components/features/ModalForm/ModalFormFooter';
import {
  getModalFormInputs,
  getSerializedModalFormInputs,
} from '@components/features/ModalForm/utils';
import { MovieDetailType } from '@constants/MovieTypes';
import LoggerService from '@services/LoggerService';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import ModalFormComponent from './component';

const modalFormLogger = new LoggerService('ModalFormContainer');

export default function ModalFormContainer({
  title,
  formAction,
  formInputs,
  selectedMovie,
  resetModalState,
  resetModalFormState,
  deleteMovie,
  updateMovie,
  addMovie,
  setFormInputs,
}) {
  const handleCloseTrigger = useCallback(() => {
    resetModalState();
    resetModalFormState();
  }, []);

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();

      switch (formAction) {
        case MODAL_FORM_DELETE_ACTION:
          deleteMovie(selectedMovie.id);
          break;

        case MODAL_FORM_EDIT_ACTION:
          updateMovie({
            ...selectedMovie,
            ...getSerializedModalFormInputs(formInputs),
          });
          break;

        case MODAL_FORM_ADD_ACTION:
          addMovie(getSerializedModalFormInputs(formInputs));
          break;

        default:
          modalFormLogger.warn(
            `FormAction: ${formAction} doesnt exist on modal form submit!`
          );
          break;
      }

      handleCloseTrigger();
    },
    [formAction, formInputs, selectedMovie]
  );

  const handleOnReset = useCallback(
    (event) => {
      event.preventDefault();
      setFormInputs(getModalFormInputs(selectedMovie));
    },
    [selectedMovie]
  );

  return (
    <ModalFormComponent
      onSubmit={handleOnSubmit}
      onReset={handleOnReset}
      onCloseTrigger={handleCloseTrigger}
      title={title}
      body={<ModalFormBody />}
      footer={<ModalFormFooter action={formAction} />}
    />
  );
}

ModalFormContainer.defaultProps = {
  formInputs: [],
  formAction: null,
  selectedMovie: null,
};

ModalFormContainer.propTypes = {
  title: PropTypes.string.isRequired,

  formInputs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      placeholder: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,

      // oneOfType doesnt seem to work correctly.
      // The value can be string, date, array of {value, label}
      // eslint-disable-next-line react/forbid-prop-types
      value: PropTypes.any,

      label: PropTypes.string,
      required: PropTypes.bool,

      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
        })
      ),
    })
  ),

  formAction: PropTypes.string,
  selectedMovie: PropTypes.shape(MovieDetailType),

  resetModalState: PropTypes.func.isRequired,
  resetModalFormState: PropTypes.func.isRequired,
  setFormInputs: PropTypes.func.isRequired,

  deleteMovie: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
};
