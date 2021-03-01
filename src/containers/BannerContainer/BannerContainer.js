import BannerComponent from '@components/BannerComponent/BannerComponent';
import ButtonComponent from '@components/Forms/ButtonComponent/ButtonComponent';
import ColumnComponent from '@components/Grid/ColumnComponent/ColumnComponent';
import RowComponent from '@components/Grid/RowComponent/RowComponent';
import InputComponent from '@components/Forms/InputComponent/InputComponent';
import React from 'react';

export default function BannerContainer() {
  return (
    <BannerComponent
      imgSrc="https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"
      imgAlt="Posts of movies on the wall"
    >
      <h1 className="banner__title">Find your Movie</h1>
      <form>
        <RowComponent>
          <ColumnComponent classes="column--m-9">
            <InputComponent placeholder="What do you want to watch?" />
          </ColumnComponent>

          <ColumnComponent classes="column--m-3">
            <div className="form-element-wrapper">
              <ButtonComponent classes="btn--primary btn--full-width">
                Search
              </ButtonComponent>
            </div>
          </ColumnComponent>
        </RowComponent>
      </form>
    </BannerComponent>
  );
}
