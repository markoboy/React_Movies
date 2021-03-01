import BrandLogoComponent from '@components/BrandLogoComponent/BrandLogoComponent';
import ButtonComponent from '@components/ButtonComponent/ButtonComponent';
import HeaderNavComponent from '@components/HeaderNavComponent/HeaderNavComponent';
import SpinnerComponent from '@components/SpinnerComponent/SpinnerComponent';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, lazy, Suspense } from 'react';

const LazyModalComponent = lazy(() => import('@components/ModalComponent/ModalComponent'));

export default class HeaderNavContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
      addMovieFormData: null,
    };

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalClose() {
    this.setState({ isModalOpened: false });
  }

  handleAddButton() {
    this.setState({ isModalOpened: true });
  }

  render() {
    return (
      <>
        <HeaderNavComponent
          headerLogo={<BrandLogoComponent />}
          actionButton={
            (
              <ButtonComponent
                classes="btn--secondary btn--with-icon"
                onButtonClick={this.handleAddButton}
              >
                <FontAwesomeIcon size="xs" icon={faPlus} />
                Add Movie
              </ButtonComponent>
            )
          }
        />
        {this.state.isModalOpened && (
          <Suspense fallback={<SpinnerComponent />}>
            <LazyModalComponent
              title="Add Movie"
              onCloseTrigger={this.handleModalClose}
              body={<div>This is the body</div>}
              footer={<div>This is the footer</div>}
            />
          </Suspense>
        )}
      </>
    );
  }
}
