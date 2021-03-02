import SpinnerComponent from '@components/SpinnerComponent/SpinnerComponent';
import FooterContainer from '@containers/FooterContainer/FooterContainer';
import HeaderNavContainer from '@containers/HeaderNavContainer/HeaderNavContainer';
import SiteContainer from '@containers/SiteContainer/SiteContainer';
import {
  Actions,
  defaultModalContext,
  ModalContext,
} from '@services/ModalContext';
import MovieService from '@services/MovieService';
import getModalFormInputs from '@utils/getModalFormInputs';
import getSerializedModalFormInputs from '@utils/getSerializedModalFormInputs';
import React, { Component, lazy, Suspense } from 'react';

const LazyModalFormContainer = lazy(() => import('@containers/ModalFormContainer/ModalFormContainer'));

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      modal: {
        ...defaultModalContext,
        setModalState: this.modalSetModalState.bind(this),
      },
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleEditMovie = this.handleEditMovie.bind(this);
    this.handelDeleteMovie = this.handelDeleteMovie.bind(this);
  }

  componentDidMount() {
    const movies = MovieService.getMovies();

    this.setState({
      movies,
    });
  }

  handleAddMovie(movie) {
    const movies = MovieService.addMovie(movie);

    this.setState({
      movies,
    });
  }

  handleEditMovie(movieId, movie) {
    const movies = MovieService.editMovie(movieId, movie);

    this.setState({
      movies,
    });
  }

  // eslint-disable-next-line react/sort-comp
  handelDeleteMovie(movieId) {
    const movies = MovieService.deleteMovie(movieId);

    this.setState({
      movies,
    });
  }

  handleOnChange(input, value) {
    this.setState((state) => ({
      modal: {
        ...state.modal,
        formInputs: state.modal.formInputs.map((fInput) => {
          if (fInput === input) {
            return {
              ...fInput,
              value,
            };
          }

          return fInput;
        }),
      },
    }));
  }

  handleFormSubmit() {
    const { action, formInputs, movie } = this.state.modal;

    switch (action) {
      case Actions.DELETE:
        this.handelDeleteMovie(movie.id);
        break;
      case Actions.EDIT:
        this.handleEditMovie(movie.id, {
          ...movie,
          ...getSerializedModalFormInputs(formInputs),
        });
        break;
      case Actions.ADD:
        this.handleAddMovie(getSerializedModalFormInputs(formInputs));
        break;
      default:
        this.handleModalClose();
    }

    if (action !== Actions.CONFIRM) {
      this.modalSetModalState({
        action: Actions.CONFIRM,
        formBody: this.state.modal.successMessage,
      });
    }
  }

  handleFormReset() {
    this.modalSetModalState({
      formInputs: getModalFormInputs(this.state.modal.movie || {}),
    });
  }

  handleModalClose() {
    this.modalSetModalState({
      isOpened: false,
      movie: null,
      formInputs: null,
      formBody: null,
      action: null,
    });
  }

  modalSetModalState(modalState) {
    this.setState((state) => ({
      modal: {
        ...state.modal,
        ...modalState,
      },
    }));
  }

  render() {
    const { modal } = this.state;
    const modalTitle = modal.action !== Actions.CONFIRM ? `${modal.action} movie` : ' ';

    return (
      <ModalContext.Provider value={this.state.modal}>
        <HeaderNavContainer />
        <SiteContainer movies={this.state.movies} />
        <FooterContainer />

        {modal.isOpened && (
          <Suspense fallback={<SpinnerComponent />}>
            <LazyModalFormContainer
              title={modalTitle}
              actionButtons={modal[modal.action]}
              formBody={modal.formBody}
              formInputs={modal.formInputs}
              onCancel={() => this.handleModalClose()}
              onSubmit={() => this.handleFormSubmit()}
              onReset={() => this.handleFormReset()}
              onChange={(input, value) => this.handleOnChange(input, value)}
            />
          </Suspense>
        )}
      </ModalContext.Provider>
    );
  }
}
