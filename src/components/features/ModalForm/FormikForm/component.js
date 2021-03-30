import DatePicker from '@components/common/Forms/DatePicker';
import Input from '@components/common/Forms/Input';
import Select from '@components/common/Forms/Select';
import { withFormikField } from '@components/hocs/WithFormikField';
import { withFormikSetField } from '@components/hocs/WithFormikSetField';
import PropTypes from 'prop-types';
import React from 'react';
import { GENRE_SELECT_OPTIONS } from '../constants';

const WithFormikSetFieldDatePicker = withFormikSetField(DatePicker);
const WithFormikSetFieldSelect = withFormikSetField(Select);

const WithFormikFieldInput = withFormikField(Input);
const WithFormikFieldDatePicker = withFormikField(WithFormikSetFieldDatePicker);
const WithFormikFieldSelect = withFormikField(WithFormikSetFieldSelect);

function FormikFormComponent({ formik, children }) {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleReset,
    handleChange,
    setFieldValue,
  } = formik;

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      {values.id && (
        <Input
          type="number"
          name="id"
          id="id"
          label="Movie ID"
          value={values.id}
          disabled
        />
      )}

      <WithFormikFieldInput
        type="text"
        name="title"
        id="title"
        label="Title"
        placeholder="Title here"
        onChange={handleChange}
        values={values}
        touched={touched}
        errors={errors}
      />

      <WithFormikFieldDatePicker
        name="release_date"
        label="Release Date"
        placeholder="Select Date"
        onChange={setFieldValue}
        values={values}
        touched={touched}
        errors={errors}
      />

      <WithFormikFieldInput
        type="text"
        name="poster_path"
        id="poster_path"
        label="Movie Poster URL"
        placeholder="Movie Poster URL here"
        onChange={handleChange}
        values={values}
        touched={touched}
        errors={errors}
      />

      <WithFormikFieldSelect
        name="genres"
        label="Genre"
        placeholder="Select Genres"
        options={GENRE_SELECT_OPTIONS}
        onChange={setFieldValue}
        values={values}
        touched={touched}
        errors={errors}
      />

      <WithFormikFieldInput
        type="text"
        name="overview"
        id="overview"
        label="Overview"
        placeholder="Overview here"
        onChange={handleChange}
        values={values}
        touched={touched}
        errors={errors}
      />

      <WithFormikFieldInput
        type="number"
        name="runtime"
        id="runtime"
        label="Runtime"
        placeholder="Runtime here"
        onChange={handleChange}
        values={values}
        touched={touched}
        errors={errors}
      />

      {children}
    </form>
  );
}

FormikFormComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formik: PropTypes.object.isRequired,
};

export default FormikFormComponent;
