import Banner from '@components/common/Banner';
import Button from '@components/common/Forms/Button';
import Input from '@components/common/Forms/Input';
import Column from '@components/common/Grid/Column';
import Row from '@components/common/Grid/Row';
import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import { withFormikField } from '@components/hocs/WithFormikField';
import BannerImage from '@resources/banner.jpg';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const ButtonComponentWithWrapper = withFormElementWrapper(Button);
const WithFormikFieldInput = withFormikField(Input);

function SearchBannerComponent({ title, formik }) {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleReset,
    handleChange,
  } = formik;

  return (
    <Banner imgSrc={BannerImage} imgAlt="Posts of movies on the wall">
      <h1 className="banner__title">{title}</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Row>
          <Column classes="column--m-9">
            <WithFormikFieldInput
              name="query"
              placeholder="What do you want to watch?"
              values={values}
              touched={touched}
              errors={errors}
              onChange={handleChange}
            />
          </Column>

          <Column classes="column--m-3">
            <ButtonComponentWithWrapper
              type="submit"
              classes="btn--primary btn--full-width"
            >
              Search
            </ButtonComponentWithWrapper>
          </Column>
        </Row>
      </form>
    </Banner>
  );
}

SearchBannerComponent.defaultProps = {
  title: 'Find your Movie',
};

SearchBannerComponent.propTypes = {
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  formik: PropTypes.object.isRequired,
};

export default memo(SearchBannerComponent);
