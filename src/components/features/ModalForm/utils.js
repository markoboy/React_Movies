import {
  FORM_TYPE_DATE,
  FORM_TYPE_NUMBER,
  FORM_TYPE_SELECT,
  FORM_TYPE_TEXT,
} from './constants';

/**
 * Generate the form inputs that are needed for the
 * add movie form
 */
export function getModalFormInputs(movie) {
  const {
    id = '',
    title = '',
    image = '',
    releaseDate = '',
    genres = [],
    overview = '',
    runtime = '',
  } = movie || {};

  const formInputs = [
    {
      type: FORM_TYPE_TEXT,
      placeholder: 'Title here',
      name: 'title',
      id: 'modal-form-title',
      value: title,
      label: 'Title',
      required: true,
    },
    {
      type: FORM_TYPE_DATE,
      placeholder: 'Select Date',
      name: 'release_date',
      id: 'modal-form-date',
      value: releaseDate,
      label: 'Release Date',
      required: false,
    },
    {
      type: FORM_TYPE_TEXT,
      placeholder: 'Movie Poster URL here',
      name: 'poster_path',
      id: 'modal-form-url',
      value: image,
      label: 'Movie Poster URL',
      required: true,
    },
    {
      type: FORM_TYPE_SELECT,
      placeholder: 'Select Genres',
      name: 'genres',
      id: 'modal-form-genres',
      value: genres,
      label: 'Genres',
      required: true,
      options: [
        {
          label: 'Documentary',
          value: 'documentary',
        },
        {
          label: 'Comedy',
          value: 'comedy',
        },
        {
          label: 'Horror',
          value: 'horror',
        },
        {
          label: 'Crime',
          value: 'crime',
        },
      ],
    },
    {
      type: FORM_TYPE_TEXT,
      placeholder: 'Overview here',
      name: 'overview',
      id: 'modal-form-overview',
      value: overview,
      label: 'Overview',
      required: true,
    },
    {
      type: FORM_TYPE_NUMBER,
      placeholder: 'Runtime here',
      name: 'runtime',
      id: 'modal-form-runtime',
      value: runtime,
      label: 'Runtime',
      required: true,
    },
  ];

  if (id) {
    formInputs.unshift({
      type: FORM_TYPE_NUMBER,
      placeholder: 'Movie ID',
      name: 'id',
      id: 'modal-form-id',
      value: id,
      label: 'Movie id',
      required: false,
      disabled: true,
    });
  }

  return formInputs;
}

export function getSerializedModalFormInputs(formInputs) {
  return formInputs.reduce((computedData, input) => {
    // eslint-disable-next-line no-param-reassign
    computedData[input.name] = input.value;
    return computedData;
  }, {});
}

/**
 * Convert an option to a multi select option to be used
 * by the react-multi-select-component package to display
 * selected options.
 * @param {string} option The option to convert
 */
export function convertToMultiSelectOption(option) {
  // Only convert when the option is a string
  if (typeof option !== 'string') {
    return option;
  }

  return {
    value: option.toLowerCase(),
    label: option,
  };
}
