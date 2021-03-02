import FormTypes from '@constants/FormTypes';

/**
 * Generate the form inputs that are needed for the
 * add movie form
 */
export default function getModalFormInputs({
  title = '',
  url = '',
  releaseDate = '',
  genre = [],
  overview = '',
  runtime = '',
} = {}) {
  return [
    {
      type: FormTypes.TEXT,
      placeholder: 'Title here',
      name: 'title',
      id: 'modal-form-title',
      value: title,
      label: 'Title',
      required: true,
    },
    {
      type: FormTypes.DATE,
      placeholder: 'Select Date',
      name: 'releaseDate',
      id: 'modal-form-date',
      value: releaseDate,
      label: 'Release Date',
      required: true,
    },
    {
      type: FormTypes.TEXT,
      placeholder: 'Movie URL here',
      name: 'url',
      id: 'modal-form-url',
      value: url,
      label: 'Movie URL',
      required: true,
    },
    {
      type: FormTypes.SELECT,
      placeholder: 'Select Genre',
      name: 'genre',
      id: 'modal-form-genre',
      value: genre,
      label: 'Genre',
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
      type: FormTypes.TEXT,
      placeholder: 'Overview here',
      name: 'overview',
      id: 'modal-form-overview',
      value: overview,
      label: 'Overview',
      required: true,
    },
    {
      type: FormTypes.TEXT,
      placeholder: 'Runtime here',
      name: 'runtime',
      id: 'modal-form-runtime',
      value: runtime,
      label: 'Runtime',
      required: true,
    },
  ];
}
