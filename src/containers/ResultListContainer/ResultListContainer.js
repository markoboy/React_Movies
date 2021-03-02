import withSection from '@components/HigherOrder/WithSection';
import ResultCountComponent from '@components/ResultCountComponent/ResultCountComponent';
import ResultListComponent from '@components/ResultListComponent/ResultListComponent';
import ResultListItemComponent from '@components/ResultListItemComponent/ResultListItemComponent';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const ResultListComponentWithSection = withSection(ResultListComponent, {
  classes: 'section--padding-bottom-only',
});

export default class ResultListContainer extends Component {
  render() {
    const actions = ['Edit', 'Delete'];
    const { movies } = this.props;

    return (
      <>
        <ResultCountComponent count={movies.length} />
        <ResultListComponentWithSection>
          {movies.map((movie) => (
            <ResultListItemComponent
              key={movie.id}
              {...movie}
              actions={actions}
            />
          ))}
        </ResultListComponentWithSection>
      </>
    );
  }
}

ResultListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEditMovie: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
};
