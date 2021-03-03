import ButtonComponent from '@components/Forms/ButtonComponent/ButtonComponent';
import DatePickerComponent from '@components/Forms/DatePickerComponent/DatePickerComponent';
import InputComponent from '@components/Forms/InputComponent/InputComponent';
import SelectComponent from '@components/Forms/SelectComponent/SelectComponent';
import ColumnComponent from '@components/Grid/ColumnComponent/ColumnComponent';
import RowComponent from '@components/Grid/RowComponent/RowComponent';
import ModalComponent from '@components/ModalComponent/ModalComponent';
import FormTypes from '@constants/FormTypes';
import convertToMultiSelectOption from '@utils/convertToMultiSelectOption';
import React, { Fragment, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

export default function ModalFormContainer({
  title,
  actionButtons,
  formInputs, // Form Inputs to render inputs
  formBody, // Form body to render a body instead
  onSubmit,
  onReset,
  onCancel,
  onChange,
}) {
  const getDatePicker = (input) => {
    if (input.type !== FormTypes.DATE) {
      return null;
    }

    return (
      <DatePickerComponent
        onChange={(event) => onChange(input, event)}
        {...input}
      />
    );
  };

  const getInput = (input) => (
    <InputComponent onChange={(event) => onChange(input, event)} {...input} />
  );

  const getSelect = (input) => {
    if (input.type !== FormTypes.SELECT) {
      return null;
    }

    return (
      <SelectComponent
        placeholder={input.placeholder}
        options={input.options}
        value={input.value.map(convertToMultiSelectOption)}
        label={input.label}
        onChange={(event) => onChange(input, event)}
      />
    );
  };

  const generateInputs = useCallback(() => (
    <fieldset>
      {formInputs.map((input) => (
        <Fragment key={input.id}>
          {getDatePicker(input) || getSelect(input) || getInput(input)}
        </Fragment>
      ))}
    </fieldset>
  ), [formInputs]);

  const modalBody = formBody || generateInputs();

  const modalFooter = useMemo(() => (
    <RowComponent classes="justify-content--flex-end">
      {actionButtons.map((action) => (
        <ColumnComponent
          key={`header-${action.type}-${action.name}`}
          classes="column--m-3"
        >
          <ButtonComponent type={action.type} classes={action.classes}>
            {action.name}
          </ButtonComponent>
        </ColumnComponent>
      ))}
    </RowComponent>
  ), [actionButtons]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleFormReset = (event) => {
    event.preventDefault();
    onReset();
  };

  return (
    <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <ModalComponent
        title={title}
        onCloseTrigger={onCancel}
        body={modalBody}
        footer={modalFooter}
      />
    </form>
  );
}

ModalFormContainer.defaultProps = {
  formInputs: null,
  formBody: null,
};

ModalFormContainer.propTypes = {
  title: PropTypes.string.isRequired,

  actionButtons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      classes: PropTypes.string,
    })
  ).isRequired,

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

  formBody: PropTypes.element,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
