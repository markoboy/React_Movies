// eslint-disable-next-line import/no-named-default
import { default as BannerComponent } from '@components/Banner';
import Button from '@components/Forms/Button';
import Column from '@components/Grid/Column';
import Row from '@components/Grid/Row';
import Input from '@components/Forms/Input';
import React from 'react';
import withFormElementWrapper from '@components/HigherOrder/WithFormElementWrapper';
import BannerImage from '@resources/banner.jpg';

const ButtonComponentWithWrapper = withFormElementWrapper(Button);

export default function Banner() {
  return (
    <BannerComponent
      imgSrc={BannerImage}
      imgAlt="Posts of movies on the wall"
    >
      <h1 className="banner__title">Find your Movie</h1>
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
    </BannerComponent>
  );
}
