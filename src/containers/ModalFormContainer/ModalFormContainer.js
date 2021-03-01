import ButtonComponent from '@components/Forms/ButtonComponent/ButtonComponent';
import DatePickerComponent from '@components/Forms/DatePickerComponent/DatePickerComponent';
import InputComponent from '@components/Forms/InputComponent/InputComponent';
import SelectComponent from '@components/Forms/SelectComponent/SelectComponent';
import ColumnComponent from '@components/Grid/ColumnComponent/ColumnComponent';
import RowComponent from '@components/Grid/RowComponent/RowComponent';
import ModalComponent from '@components/ModalComponent/ModalComponent';
import FormTypes from '@constants/FormTypes';
import React, { Fragment } from 'react';

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
        value={input.value}
        label={input.label}
        onChange={(event) => onChange(input, event)}
      />
    );
  };

  const modalBody = formBody || (
    <fieldset>
      {formInputs.map((input) => (
        <Fragment key={input.id}>
          {getDatePicker(input) || getSelect(input) || getInput(input)}
        </Fragment>
      ))}
    </fieldset>
  );

  const modalFooter = (
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
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} onReset={onReset}>
      <ModalComponent
        title={title}
        onCloseTrigger={onCancel}
        body={modalBody}
        footer={modalFooter}
      />
    </form>
  );
}
