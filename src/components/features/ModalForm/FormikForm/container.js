import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { MovieSchemaYup } from '../utils';
import FormikFormComponent from './component';

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

function FormikFormContainer({
  selectedMovie,
  onSubmit,
  children,
}) {
  const formik = useFormik({
    initialValues: selectedMovie,
    onSubmit,
    validationSchema: MovieSchemaYup,
  });

  return (
    <FormikFormComponent formik={formik}>
      {children}
    </FormikFormComponent>
  );
}

FormikFormContainer.defaultProps = {
  selectedMovie: defaultSelectedMovie,
};

FormikFormContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  selectedMovie: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default FormikFormContainer;
