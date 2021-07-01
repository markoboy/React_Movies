/* eslint-disable react/forbid-prop-types */
import DatePicker from '@components/common/Forms/DatePicker';
import Input from '@components/common/Forms/Input';
import Select from '@components/common/Forms/Select';
import { withFormError } from '@components/hocs/WithFormError';
import PropTypes from 'prop-types';
import React from 'react';
import { GENRE_SELECT_OPTIONS } from '../constants';

const WithFormErrorInput = withFormError(Input);
const WithFormErrorDatePicker = withFormError(DatePicker);
const WithFormErrorSelect = withFormError(Select);

function ModalMovieFormComponent({
  inputs,
  getValues,
  setValue,
  onSubmit,
  onReset,
  errors,
  children,
}) {
  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      {getValues('id') && (
        <Input
          type="number"
          name="id"
          id="id"
          label="Movie ID"
          value={getValues('id')}
          disabled
        />
      )}

      <WithFormErrorInput
        input={inputs.title}
        defaultValue={getValues('title')}
        label="Title"
        placeholder="Title here"
        errors={errors}
      />

      <WithFormErrorDatePicker
        input={inputs.release_date}
        defaultValue={getValues('release_date')}
        label="Release Date"
        placeholder="Select Date"
        errors={errors}
        setValue={setValue}
      />

      <WithFormErrorInput
        input={inputs.poster_path}
        defaultValue={getValues('poster_path')}
        label="Movie Poster URL"
        placeholder="Movie Poster URL here"
        errors={errors}
      />

      <WithFormErrorSelect
        input={inputs.genres}
        value={getValues('genres')}
        label="Genre"
        placeholder="Select Genres"
        options={GENRE_SELECT_OPTIONS}
        errors={errors}
        setValue={setValue}
      />

      <WithFormErrorInput
        input={inputs.overview}
        defaultValue={getValues('overview')}
        label="Overview"
        placeholder="Overview here"
        errors={errors}
      />

      <WithFormErrorInput
        input={inputs.runtime}
        defaultValue={getValues('runtime')}
        type="number"
        label="Runtime"
        placeholder="Runtime here"
        errors={errors}
      />

      {children}
    </form>
  );
}

ModalMovieFormComponent.defaultProps = {
  errors: undefined,
};

ModalMovieFormComponent.propTypes = {
  inputs: PropTypes.object.isRequired,
  getValues: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default ModalMovieFormComponent;
