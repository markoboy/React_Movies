import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
// eslint-disable-next-line import/no-unresolved
import { useForm } from 'react-hook-form';
import ModalMovieFormComponent from './component';

// Url regex taken from yup: https://github.com/jquense/yup/blob/master/src/string.ts#L11
const URL_REGEX = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|\/|\?)*)?$/i;

function ModalMovieForm({ selectedMovie, onSubmit, children }) {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      ...selectedMovie,
    },
    shouldUnregister: true,
  });

  const registerFields = useCallback(
    () => ({
      id: register('id'),
      title: register('title', {
        required: 'Title is required',
      }),
      release_date: register('release_date'),
      poster_path: register('poster_path', {
        required: 'Movie Poster URL is required',
        validate: (value) => {
          const isValid = URL_REGEX.test(value);
          return isValid ? true : 'Input a valid URL to proceed';
        },
      }),
      genres: register('genres', {
        required: 'Select at least one genre to proceed',
      }),
      overview: register('overview', {
        required: 'Overview is required',
      }),
      runtime: register('runtime', {
        required: 'Runtime is required',
        valueAsNumber: true,
      }),
    }),
    [register]
  );

  const onReset = useCallback(() => {
    reset(undefined, {
      keepDefaultValues: true,
    });

    // Because of useMemo the fields are not reregistered when the component rerenders
    // We need to do this manually else validation doesnt work
    registerFields();
  }, [reset, selectedMovie]);

  const inputs = useMemo(registerFields, [registerFields]);

  return (
    <ModalMovieFormComponent
      inputs={inputs}
      getValues={getValues}
      setValue={setValue}
      onSubmit={handleSubmit(onSubmit)}
      onReset={onReset}
      errors={errors}
    >
      {children}
    </ModalMovieFormComponent>
  );
}

ModalMovieForm.defaultProps = {
  selectedMovie: undefined,
};

ModalMovieForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  selectedMovie: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalMovieForm;
