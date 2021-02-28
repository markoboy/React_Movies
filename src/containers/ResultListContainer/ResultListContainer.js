import withSection from '@components/HigherOrder/WithSection';
import ResultCountComponent from '@components/ResultCountComponent/ResultCountComponent';
import ResultListComponent from '@components/ResultListComponent/ResultListComponent';
import ResultListItemComponent from '@components/ResultListItemComponent/ResultListItemComponent';
import LoggerService from '@services/LoggerService';
import MovieService from '@services/MovieService';
import React from 'react';

const ResultListComponentWithSection = withSection(ResultListComponent, {
  classes: 'section--padding-bottom-only',
});

const logger = new LoggerService('ResultListContainer');

export default function ResultListContainer() {
  const movies = MovieService.getMovies();

  const actions = ['Edit', 'Delete'];

  logger.info('Math random is called to trigger Error Boundary with a 50% chance!');
  if (Math.random() <= 0.5) {
    throw new Error('An error occurred!');
  }

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
