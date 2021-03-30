import {
  MODAL_FORM_ADD_ACTION,
  MODAL_FORM_DELETE_ACTION,
  MODAL_FORM_EDIT_ACTION,
} from '@components/features/ModalForm/constants';
import { serializeMovieData } from '@components/features/ModalForm/utils';
import { MovieDetailType } from '@constants/MovieTypes';
import LoggerService from '@services/LoggerService';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import ModalFormComponent from './component';
import ModalFormBody from './ModalFormBody';

const modalFormLogger = new LoggerService('ModalFormContainer');

export default function ModalFormContainer({
  title,
  formAction,
  selectedMovie,
  resetModalState,
  resetModalFormState,
  deleteMovie,
  updateMovie,
  addMovie,
}) {
  const handleCloseTrigger = useCallback(() => {
    resetModalState();
    resetModalFormState();
  }, []);

  const handleOnSubmit = useCallback(
    /**
     * @param {import('formik').FormikValues} movieFormValues
     * @param {import('formik').FormikHelpers} formikHelpers
     */
    (movieFormValues, formikHelpers) => {
      switch (formAction) {
        case MODAL_FORM_DELETE_ACTION:
          deleteMovie(selectedMovie.id);
          break;

        case MODAL_FORM_EDIT_ACTION:
          updateMovie(serializeMovieData(movieFormValues));
          break;

        case MODAL_FORM_ADD_ACTION:
          addMovie(serializeMovieData(movieFormValues));
          break;

        default:
          modalFormLogger.warn(
            `FormAction: ${formAction} doesnt exist on modal form submit!`
          );
          break;
      }

      if (formikHelpers) {
        formikHelpers.setSubmitting(false);
      }

      handleCloseTrigger();
    },
    [formAction, selectedMovie]
  );

  return (
    <ModalFormComponent
      onCloseTrigger={handleCloseTrigger}
      title={title}
      body={<ModalFormBody onSubmit={handleOnSubmit} />}
    />
  );
}

ModalFormContainer.defaultProps = {
  formAction: null,
  selectedMovie: null,
};

ModalFormContainer.propTypes = {
  title: PropTypes.string.isRequired,

  formAction: PropTypes.string,
  selectedMovie: PropTypes.shape(MovieDetailType),

  resetModalState: PropTypes.func.isRequired,
  resetModalFormState: PropTypes.func.isRequired,

  deleteMovie: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
};
