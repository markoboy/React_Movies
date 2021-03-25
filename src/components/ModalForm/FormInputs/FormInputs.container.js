import FormInputFactory from '@components/ModalForm/FormInputFactory';
import { updateFormInputCreator } from '@store/action-creators/modalFormActionCreators';
import { modalFormInputsSelector } from '@store/selectors/modalFormSelectors';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

function FormInputsContainer({ formInputs, dispatch }) {
  const handleInputChange = useCallback((input, value) => {
    dispatch(updateFormInputCreator(input, value));
  }, []);

  const generateFormInput = useCallback(
    (input) => (
      <FormInputFactory
        key={input.id}
        type={input.type}
        input={input}
        onChange={handleInputChange}
      />
    ),
    [formInputs]
  );

  return formInputs && <fieldset>{formInputs.map(generateFormInput)}</fieldset>;
}

const mapStateToProps = (state) => ({
  formInputs: modalFormInputsSelector(state),
});

export default connect(mapStateToProps)(FormInputsContainer);
