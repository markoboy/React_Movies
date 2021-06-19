import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import SearchBannerComponent from './component';

function SearchBannerContainer({ title }) {
  const history = useHistory();
  const { query = '' } = useParams();

  const {
    formState: { errors, touchedFields },
    register,
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      query,
    },
    shouldUnregister: true,
  });

  const onSubmit = useCallback((data) => {
    if (data.query) {
      history.push(`/search/${data.query}`);
    } else {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    setValue('query', query);
    clearErrors('query');
  }, [query]);

  const queryField = register('query', {
    required: 'Please input a query to search!',
  });

  return (
    <SearchBannerComponent
      title={title}
      input={queryField}
      errors={errors}
      touched={touchedFields}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
}

SearchBannerContainer.defaultProps = {
  title: 'Find your Movie',
};

SearchBannerContainer.propTypes = {
  title: PropTypes.string,
};

const SearchBanner = memo(SearchBannerContainer);

export default SearchBanner;
