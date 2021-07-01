import Banner from '@components/common/Banner';
import Button from '@components/common/Forms/Button';
import Input from '@components/common/Forms/Input';
import Column from '@components/common/Grid/Column';
import Row from '@components/common/Grid/Row';
import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import { withFormError } from '@components/hocs/WithFormError';
import BannerImage from '@resources/banner.jpg?sizes[]=300,sizes[]=600,sizes[]=1024';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const ButtonComponentWithWrapper = withFormElementWrapper(Button);
const WithFormErrorInput = withFormError(Input);

function SearchBannerComponent({
  title,
  input,
  errors,
  touched,
  handleSubmit,
}) {
  return (
    <Banner
      src={BannerImage.src}
      srcSet={BannerImage.srcSet}
      width={BannerImage.width}
      height={BannerImage.height}
      sizes="(min-width: 600px) 600px, 100vw"
      alt="Posts of movies on the wall"
    >
      <h1 className="banner__title">{title}</h1>
      <form onSubmit={handleSubmit}>
        <Row>
          <Column classes="column--m-9">
            <WithFormErrorInput
              input={input}
              placeholder="What do you want to watch?"
              touched={touched}
              errors={errors}
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
};

export default memo(SearchBannerComponent);
