import { setModalTitleCreator } from '@store/action-creators/modalActionCreators';
import { setFormInputsCreator } from '@store/action-creators/modalFormActionCreators';
import {
  modalFormActionSelector,
  modalFormInputsSelector,
  modalFormSelectedMovieSelector,
} from '@store/selectors/modalFormSelectors';
import { memo } from 'react';
import { connect } from 'react-redux';
import ModalFormBodyContainer from './container';

const mapStateToProps = (state) => ({
  action: modalFormActionSelector(state),
  selectedMovie: modalFormSelectedMovieSelector(state),
  formInputs: modalFormInputsSelector(state),
});

const mapDispatchToProps = {
  setModalTitle: setModalTitleCreator,
  setFormInputs: setFormInputsCreator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(ModalFormBodyContainer));
