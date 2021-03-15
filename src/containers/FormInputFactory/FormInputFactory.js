import DatePicker from '@components/Forms/DatePicker';
import Input from '@components/Forms/Input';
import Select from '@components/Forms/Select';
import { FORM_TYPE_DATE, FORM_TYPE_SELECT } from '@constants/FormTypes';
import convertToMultiSelectOption from '@utils/convertToMultiSelectOption';
import React, { memo, useCallback } from 'react';

function FormInputFactory({ type, input, onChange }) {
  const changeHandler = useCallback(
    (event) => {
      onChange(input, event);
    },
    [input, onChange]
  );

  switch (type) {
    case FORM_TYPE_DATE:
      return <DatePicker onChange={changeHandler} {...input} />;

    case FORM_TYPE_SELECT:
      return (
        <Select
          placeholder={input.placeholder}
          options={input.options}
          value={input.value.map(convertToMultiSelectOption)}
          label={input.label}
          onChange={changeHandler}
        />
      );

    default:
      return <Input onChange={changeHandler} {...input} />;
  }
}

export default memo(FormInputFactory);
