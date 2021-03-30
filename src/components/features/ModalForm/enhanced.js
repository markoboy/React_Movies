import { resetModalStateCreator } from '@store/action-creators/modalActionCreators';
import { resetModalFormStateCreator } from '@store/action-creators/modalFormActionCreators';
import {
  modalFormActionSelector,
  modalFormSelectedMovieSelector,
} from '@store/selectors/modalFormSelectors';
import { modalTitleSelector } from '@store/selectors/modalSelectors';
import { addMovie, deleteMovie, updateMovie } from '@store/thunks/moviesThunk';
import { connect } from 'react-redux';
import ModalFormContainer from './container';

const mapStateToProps = (state) => ({
  title: modalTitleSelector(state),
  formAction: modalFormActionSelector(state),
  selectedMovie: modalFormSelectedMovieSelector(state),
});

const mapDispatchToProps = {
  resetModalState: resetModalStateCreator,
  resetModalFormState: resetModalFormStateCreator,
  deleteMovie,
  updateMovie,
  addMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalFormContainer);
