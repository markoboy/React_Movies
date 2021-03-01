import withSection from '@components/HigherOrder/WithSection';
import ResultCountComponent from '@components/ResultCountComponent/ResultCountComponent';
import ResultListComponent from '@components/ResultListComponent/ResultListComponent';
import ResultListItemComponent from '@components/ResultListItemComponent/ResultListItemComponent';
import MovieService from '@services/MovieService';
import React from 'react';

const ResultListComponentWithSection = withSection(ResultListComponent, {
  classes: 'section--padding-bottom-only',
});

export default function ResultListContainer() {
  const movies = MovieService.getMovies();

  const actions = ['Edit', 'Delete'];

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
