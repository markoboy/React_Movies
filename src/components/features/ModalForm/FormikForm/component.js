import DatePicker from '@components/common/Forms/DatePicker';
import Input from '@components/common/Forms/Input';
import Select from '@components/common/Forms/Select';
import { withFormikField } from '@components/hocs/WithFormikField';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { GENRE_SELECT_OPTIONS } from '../constants';
import { MovieSchemaYup } from '../utils';

const WithFormikFieldInput = withFormikField(Input);
const WithFormikFieldDatePicker = withFormikField(DatePicker);
const WithFormikFieldSelect = withFormikField(Select);

/**
 * We need to provide a default selected movie on formik as it will
 * not display error messages if the initial values are null or an empty object.
 */
const defaultSelectedMovie = {
  title: undefined,
  release_date: undefined,
  poster_path: undefined,
  genres: [],
  overview: undefined,
  runtime: undefined,
};

function FormikFormComponent({ selectedMovie, onSubmit, children }) {
  return (
    <Formik
      initialValues={selectedMovie || defaultSelectedMovie}
      validationSchema={MovieSchemaYup}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          {selectedMovie?.id && (
            <WithFormikFieldInput
              type="number"
              name="id"
              id="id"
              label="Movie ID"
              disabled
            />
          )}

          <WithFormikFieldInput
            type="text"
            name="title"
            id="title"
            label="Title"
            placeholder="Title here"
          />

          <WithFormikFieldDatePicker
            name="release_date"
            id="release_date"
            label="Release Date"
            placeholder="Select Date"
          />

          <WithFormikFieldInput
            type="text"
            name="poster_path"
            id="poster_path"
            label="Movie Poster URL"
            placeholder="Movie Poster URL here"
          />

          <WithFormikFieldSelect
            name="genres"
            id="genres"
            label="Genre"
            options={GENRE_SELECT_OPTIONS}
            placeholder="Select Genres"
          />

          <WithFormikFieldInput
            type="text"
            name="overview"
            id="overview"
            label="Overview"
            placeholder="Overview here"
          />

          <WithFormikFieldInput
            type="number"
            name="runtime"
            id="runtime"
            label="Runtime"
            placeholder="Runtime here"
          />

          {children}
        </Form>
      )}
    </Formik>
  );
}

FormikFormComponent.defaultProps = {
  selectedMovie: undefined,
};

FormikFormComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  selectedMovie: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default FormikFormComponent;
