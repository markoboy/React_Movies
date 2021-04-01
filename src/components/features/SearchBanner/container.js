import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SearchBannerComponent from './component';

function SearchBannerContainer({ title }) {
  const history = useHistory();
  const { query = '' } = useParams();

  const onSubmit = useCallback((values, helpers) => {
    if (values.query) {
      history.push(`/search/${values.query}`);
    } else {
      history.push('/');
    }

    helpers.setSubmitting(false);
  }, []);

  const validate = useCallback(
    (values) => {
      // Display an error when the field and location query are empty to inform the user
      if (!values.query && !query) {
        return { query: 'Please input a query to search!' };
      }

      return {};
    },
    [query]
  );

  const formik = useFormik({
    initialValues: {
      query,
    },
    onSubmit,
    validate,
  });

  useEffect(() => {
    formik.setFieldValue('query', query);

    // Query should be set to untouched when we navigate from a search location
    // to homepage else the error will be shown
    formik.setFieldTouched('query', false);
  }, [query]);

  return <SearchBannerComponent title={title} formik={formik} />;
}

SearchBannerContainer.defaultProps = {
  title: 'Find your Movie',
};

SearchBannerContainer.propTypes = {
  title: PropTypes.string,
};

const SearchBanner = memo(SearchBannerContainer);

export default SearchBanner;
