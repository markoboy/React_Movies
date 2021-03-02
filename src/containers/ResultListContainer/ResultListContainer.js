import withSection from '@components/HigherOrder/WithSection';
import ResultCountComponent from '@components/ResultCountComponent/ResultCountComponent';
import ResultItemPopOutComponent from '@components/ResultItemPopOutComponent/ResultItemPopOutComponent';
import ResultListComponent from '@components/ResultListComponent/ResultListComponent';
import ResultListItemComponent from '@components/ResultListItemComponent/ResultListItemComponent';
import SpinnerComponent from '@components/SpinnerComponent/SpinnerComponent';
import getModalFormInputs from '@utils/getModalFormInputs';
import getSerializedModalFormInputs from '@utils/getSerializedModalFormInputs';
import PropTypes from 'prop-types';
import React, { Component, lazy, Suspense } from 'react';

const ResultListComponentWithSection = withSection(ResultListComponent, {
  classes: 'section--padding-bottom-only',
});

const LazyModalFormContainer = lazy(() => import('@containers/ModalFormContainer/ModalFormContainer'));

const actions = {
  EDIT: 'Edit',
  DELETE: 'Delete',
};

export default class ResultListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tileActions: [actions.EDIT, actions.DELETE],
      modal: {
        isOpened: false,
        movie: null,
        formInputs: null,
        formBody: null,
        action: null,
        [actions.EDIT]: [
          {
            name: 'Reset',
            classes: 'btn--outline btn--full-width',
            type: 'reset',
          },
          {
            name: 'Save',
            classes: 'btn--primary btn--full-width',
            type: 'submit',
          },
        ],
        [actions.DELETE]: [
          {
            name: 'Confirm',
            classes: 'btn--primary btn--full-width',
            type: 'submit',
          },
        ],
      },
    };

    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleActionClick(action, movie) {
    this.setState((state) => ({
      modal: {
        ...state.modal,
        isOpened: true,
        formInputs: action === actions.EDIT ? getModalFormInputs(movie) : null,
        formBody:
          action === actions.DELETE ? (
            <p>Are you sure you want to delete this movie?</p>
          ) : null,
        movie,
        action,
      },
    }));
  }

  handleFormSubmit() {
    const { action, formInputs, movie } = this.state.modal;

    if (action === actions.DELETE) {
      this.props.onDeleteMovie(movie.id);
    } else {
      this.props.onEditMovie(movie.id, {
        ...movie,
        ...getSerializedModalFormInputs(formInputs),
      });
    }
  }

  handleFormReset() {
    this.setState((state) => ({
      modal: {
        ...state.modal,
        formInputs: getModalFormInputs(state.movie),
      },
    }));
  }

  handleModalClose() {
    this.setState((state) => ({
      modal: {
        ...state.modal,
        isOpened: false,
        movie: null,
        formInputs: null,
        action: null,
      },
    }));
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

  render() {
    const { movies } = this.props;

    const { modal, tileActions } = this.state;

    return (
      <>
        <ResultCountComponent count={movies.length} />
        <ResultListComponentWithSection>
          {movies.map((movie) => (
            <ResultListItemComponent key={movie.id} {...movie}>
              {tileActions && tileActions.length && (
                <ResultItemPopOutComponent
                  id={movie.id}
                  actions={tileActions}
                  onActionClick={(action) => this.handleActionClick(action, movie)}
                />
              )}
            </ResultListItemComponent>
          ))}
        </ResultListComponentWithSection>

        {modal.isOpened && (
          <Suspense fallback={<SpinnerComponent />}>
            <LazyModalFormContainer
              title={`${modal.action} movie`}
              actionButtons={modal[modal.action]}
              formBody={modal.formBody}
              formInputs={modal.formInputs}
              onCancel={this.handleModalClose}
              onSubmit={this.handleFormSubmit}
              onReset={this.handleFormReset}
              onChange={this.handleOnChange}
            />
          </Suspense>
        )}
      </>
    );
  }
}

ResultListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEditMovie: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
};
