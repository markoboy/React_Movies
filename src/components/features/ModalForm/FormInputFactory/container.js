import DatePicker from '@components/common/Forms/DatePicker';
import Input from '@components/common/Forms/Input';
import Select from '@components/common/Forms/Select';
import { FORM_TYPE_DATE, FORM_TYPE_SELECT } from '@components/features/ModalForm/constants';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import { convertToMultiSelectOption } from '../utils';

function FormInputFactoryContainer({ type, input, onChange }) {
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

FormInputFactoryContainer.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  input: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(FormInputFactoryContainer);
