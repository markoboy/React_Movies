import FormInputFactory from '@components/features/ModalForm/FormInputFactory';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

export default function FormInputsContainer({ formInputs, updateFormInput }) {
  const handleInputChange = useCallback((input, value) => {
    updateFormInput(input, value);
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

FormInputsContainer.defaultProps = {
  formInputs: null,
};

FormInputsContainer.propTypes = {
  formInputs: PropTypes.arrayOf(PropTypes.object),
  updateFormInput: PropTypes.func.isRequired,
};
