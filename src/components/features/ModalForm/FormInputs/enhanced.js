import { updateFormInputCreator } from '@store/action-creators/modalFormActionCreators';
import { modalFormInputsSelector } from '@store/selectors/modalFormSelectors';
import { connect } from 'react-redux';
import FormInputsContainer from './container';

const mapStateToProps = (state) => ({
  formInputs: modalFormInputsSelector(state),
});

const mapDispatchToProps = {
  updateFormInput: updateFormInputCreator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInputsContainer);
