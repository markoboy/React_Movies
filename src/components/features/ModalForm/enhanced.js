import { resetModalStateCreator } from '@store/action-creators/modalActionCreators';
import {
  resetModalFormStateCreator,
  setFormInputsCreator,
} from '@store/action-creators/modalFormActionCreators';
import {
  modalFormActionSelector,
  modalFormInputsSelector,
  modalFormSelectedMovieSelector,
} from '@store/selectors/modalFormSelectors';
import { modalTitleSelector } from '@store/selectors/modalSelectors';
import { addMovie, deleteMovie, updateMovie } from '@store/thunks/moviesThunk';
import { connect } from 'react-redux';
import ModalFormContainer from './container';

const mapStateToProps = (state) => ({
  title: modalTitleSelector(state),
  formAction: modalFormActionSelector(state),
  formInputs: modalFormInputsSelector(state),
  selectedMovie: modalFormSelectedMovieSelector(state),
});

const mapDispatchToProps = {
  resetModalState: resetModalStateCreator,
  resetModalFormState: resetModalFormStateCreator,
  setFormInputs: setFormInputsCreator,
  deleteMovie,
  updateMovie,
  addMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalFormContainer);
