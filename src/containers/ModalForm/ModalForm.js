import Modal from '@components/Modal';
import { MODAL_FORM_ADD_ACTION, MODAL_FORM_DELETE_ACTION, MODAL_FORM_EDIT_ACTION } from '@constants/Modal';
import { MovieDetailType } from '@constants/MovieTypes';
import ModalFormBody from '@containers/ModalFormBody';
import ModalFormFooter from '@containers/ModalFormFooter';
import LoggerService from '@services/LoggerService';
import { resetModalStateCreator } from '@store/action-creators/modalActionCreators';
import { resetModalFormStateCreator, setFormInputsCreator } from '@store/action-creators/modalFormActionCreators';
import { modalFormActionSelector, modalFormInputsSelector, modalFormSelectedMovieSelector } from '@store/selectors/modalFormSelectors';
import { modalTitleSelector } from '@store/selectors/modalSelectors';
import { addMovie, deleteMovie, updateMovie } from '@store/thunks/moviesThunk';
import getModalFormInputs from '@utils/getModalFormInputs';
import getSerializedModalFormInputs from '@utils/getSerializedModalFormInputs';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

const modalFormLogger = new LoggerService('ModalFormContainer');

function ModalForm({
  title,
  formAction,
  formInputs,
  formSelectedMovie,
  dispatch,
}) {
  const handleCloseTrigger = useCallback(() => {
    dispatch(resetModalStateCreator());
    dispatch(resetModalFormStateCreator());
  }, []);

  const handleOnSubmit = useCallback((event) => {
    event.preventDefault();

    switch (formAction) {
      case MODAL_FORM_DELETE_ACTION:
        dispatch(deleteMovie(formSelectedMovie.id));
        break;

      case MODAL_FORM_EDIT_ACTION:
        dispatch(
          updateMovie({ ...formSelectedMovie, ...getSerializedModalFormInputs(formInputs) })
        );
        break;

      case MODAL_FORM_ADD_ACTION:
        dispatch(addMovie(getSerializedModalFormInputs(formInputs)));
        break;

      default:
        modalFormLogger.warn(`FormAction: ${formAction} doesnt exist on modal form submit!`);
        break;
    }

    handleCloseTrigger();
  }, [formAction, formInputs, formSelectedMovie]);

  const handleOnReset = useCallback((event) => {
    event.preventDefault();
    dispatch(setFormInputsCreator(getModalFormInputs(formSelectedMovie)));
  }, [formSelectedMovie]);

  return (
    <form onSubmit={handleOnSubmit} onReset={handleOnReset}>
      <Modal
        title={title}
        onCloseTrigger={handleCloseTrigger}
        body={<ModalFormBody />}
        footer={<ModalFormFooter action={formAction} />}
      />
    </form>
  );
}

ModalForm.defaultProps = {
  formInputs: [],
  formAction: null,
  formSelectedMovie: null,
};

ModalForm.propTypes = {
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
  formSelectedMovie: PropTypes.shape(MovieDetailType),
};

const mapStateToProps = (state) => ({
  title: modalTitleSelector(state),
  formAction: modalFormActionSelector(state),
  formInputs: modalFormInputsSelector(state),
  formSelectedMovie: modalFormSelectedMovieSelector(state),
});

export default connect(mapStateToProps)(ModalForm);
