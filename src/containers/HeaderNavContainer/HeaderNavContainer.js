import BrandLogoComponent from '@components/BrandLogoComponent/BrandLogoComponent';
import ButtonComponent from '@components/Forms/ButtonComponent/ButtonComponent';
import HeaderNavComponent from '@components/HeaderNavComponent/HeaderNavComponent';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Actions, ModalContext } from '@services/ModalContext';
import getModalFormInputs from '@utils/getModalFormInputs';
import React, { Component } from 'react';

export default class HeaderNavContainer extends Component {
  handleAddButton() {
    this.context.setModalState({
      isOpened: true,
      formInputs: getModalFormInputs(),
      action: Actions.ADD,
      successMessage: <p>Movie has been added.</p>,
    });
  }

  getHeaderActionButton() {
    return (
      <ButtonComponent
        classes="btn--secondary btn--with-icon"
        onButtonClick={() => this.handleAddButton()}
      >
        <FontAwesomeIcon size="xs" icon={faPlus} />
        Add Movie
      </ButtonComponent>
    );
  }

  render() {
    return (
      <>
        <HeaderNavComponent
          headerLogo={<BrandLogoComponent />}
          actionButton={this.getHeaderActionButton()}
        />
      </>
    );
  }
}

HeaderNavContainer.contextType = ModalContext;
