import withSection from '@components/HigherOrder/WithSection';
import ResultCountComponent from '@components/ResultCountComponent/ResultCountComponent';
import ResultItemPopOutComponent from '@components/ResultItemPopOutComponent/ResultItemPopOutComponent';
import ResultListComponent from '@components/ResultListComponent/ResultListComponent';
import ResultListItemComponent from '@components/ResultListItemComponent/ResultListItemComponent';
import { Actions, ModalContext } from '@services/ModalContext';
import getModalFormInputs from '@utils/getModalFormInputs';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const ResultListComponentWithSection = withSection(ResultListComponent, {
  classes: 'section--padding-bottom-only',
});

export default class ResultListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tileActions: [Actions.EDIT, Actions.DELETE],
      modal: {
        deleteMessage: <p>Are you sure you want to delete this movie?</p>,
        confirmMessage: {
          delete: <p>Movie has been deleted.</p>,
          edit: <p>Movie has been updated.</p>,
        },
      },
    };
  }

  handleActionClick(action, movie) {
    const { modal } = this.state;
    this.context.setModalState({
      isOpened: true,
      formInputs: action === Actions.EDIT ? getModalFormInputs(movie) : null,
      formBody: action === Actions.DELETE ? modal.deleteMessage : null,
      movie,
      action,
      successMessage:
        action === Actions.EDIT
          ? modal.confirmMessage.edit
          : modal.confirmMessage.delete,
    });
  }

  render() {
    const { movies } = this.props;

    const { tileActions } = this.state;

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
      </>
    );
  }
}

ResultListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ResultListContainer.contextType = ModalContext;
