import BrandLogoComponent from '@components/BrandLogoComponent/BrandLogoComponent';
import ButtonComponent from '@components/Forms/ButtonComponent/ButtonComponent';
import HeaderNavComponent from '@components/HeaderNavComponent/HeaderNavComponent';
import SpinnerComponent from '@components/SpinnerComponent/SpinnerComponent';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getModalFormInputs from '@utils/getModalFormInputs';
import getSerializedModalFormInputs from '@utils/getSerializedModalFormInputs';
import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyModalFormContainer = lazy(() => import('@containers/ModalFormContainer/ModalFormContainer'));

export default class HeaderNavContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
      modalTitle: 'Add movie',
      modalActions: [
        {
          name: 'Reset',
          classes: 'btn--outline btn--full-width',
          type: 'reset',
        },
        {
          name: 'Submit',
          classes: 'btn--primary btn--full-width',
          type: 'submit',
        },
      ],
      formInputs: null,
    };

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleModalClose() {
    this.setState({ isModalOpened: false, formInputs: null });
  }

  handleAddButton() {
    this.setState({ isModalOpened: true, formInputs: getModalFormInputs(), });
  }

  handleFormSubmit() {
    const movie = getSerializedModalFormInputs(this.state.formInputs);
    this.props.onAddMovie(movie);
  }

  handleFormReset() {
    this.setState({ formInputs: getModalFormInputs() });
  }

  handleOnChange(input, value) {
    this.setState((state) => ({
      formInputs: state.formInputs.map((fInput) => {
        if (fInput === input) {
          return {
            ...fInput,
            value,
          };
        }

        return fInput;
      }),
    }));
  }

  getHeaderActionButton() {
    return (
      <ButtonComponent
        classes="btn--secondary btn--with-icon"
        onButtonClick={this.handleAddButton}
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
        {this.state.isModalOpened && (
          <Suspense fallback={<SpinnerComponent />}>
            <LazyModalFormContainer
              title={this.state.modalTitle}
              actionButtons={this.state.modalActions}
              formInputs={this.state.formInputs}
              onCancel={this.handleModalClose}
              onSubmit={this.handleFormSubmit}
              onReset={() => this.handleFormReset()}
              onChange={this.handleOnChange}
            />
          </Suspense>
        )}
      </>
    );
  }
}

HeaderNavContainer.propTypes = {
  onAddMovie: PropTypes.func.isRequired,
};
