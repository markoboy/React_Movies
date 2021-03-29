import Button from '@components/common/Forms/Button';
import Banner from '@components/common/Banner';
import BannerImage from '@resources/banner.jpg';
import Input from '@components/common/Forms/Input';
import Column from '@components/common/Grid/Column';
import Row from '@components/common/Grid/Row';
import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonComponentWithWrapper = withFormElementWrapper(Button);

function SearchBannerComponent({ title, onChange }) {
  return (
    <Banner imgSrc={BannerImage} imgAlt="Posts of movies on the wall">
      <h1 className="banner__title">{title}</h1>
      <form>
        <Row>
          <Column classes="column--m-9">
            <Input placeholder="What do you want to watch?" value="" onChange={onChange} />
          </Column>

          <Column classes="column--m-3">
            <ButtonComponentWithWrapper classes="btn--primary btn--full-width">
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
  onChange: () => {},
};

SearchBannerComponent.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBannerComponent;
