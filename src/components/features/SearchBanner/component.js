import Button from '@components/common/Forms/Button';
import Input from '@components/common/Forms/Input';
import Column from '@components/common/Grid/Column';
import Row from '@components/common/Grid/Row';
import withFormElementWrapper from '@components/hocs/WithFormElementWrapper';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonComponentWithWrapper = withFormElementWrapper(Button);

function SearchBannerComponent({ title }) {
  return (
    <>
      <h1 className="banner__title">{title}</h1>
      <form>
        <Row>
          <Column classes="column--m-9">
            <Input placeholder="What do you want to watch?" />
          </Column>

          <Column classes="column--m-3">
            <ButtonComponentWithWrapper classes="btn--primary btn--full-width">
              Search
            </ButtonComponentWithWrapper>
          </Column>
        </Row>
      </form>
    </>
  );
}

SearchBannerComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchBannerComponent;
