import { setModalTitleCreator } from '@store/action-creators/modalActionCreators';
import {
  modalFormActionSelector,
  modalFormSelectedMovieSelector,
} from '@store/selectors/modalFormSelectors';
import { memo } from 'react';
import { connect } from 'react-redux';
import ModalFormBodyContainer from './container';

const mapStateToProps = (state) => ({
  action: modalFormActionSelector(state),
  selectedMovie: modalFormSelectedMovieSelector(state),
});

const mapDispatchToProps = {
  setModalTitle: setModalTitleCreator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(ModalFormBodyContainer));
