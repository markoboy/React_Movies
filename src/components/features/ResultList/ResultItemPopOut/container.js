import { MovieDetailType } from '@constants/MovieTypes';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import ResultItemPopOutComponent from './component';
import PopOutContentItem from './PopOutContentItem';

function ResultItemPopOutContainer({ actions, movie, onClick }) {
  const handleButtonClick = useCallback(
    (action) => {
      onClick(action, movie);
    },
    [movie, onClick]
  );

  const getButtonItem = useCallback(
    (action) => (
      <PopOutContentItem
        key={`${movie.id}-${action}`}
        action={action}
        onClick={handleButtonClick}
      />
    ),
    [movie, handleButtonClick]
  );

  return (
    <ResultItemPopOutComponent>
      {actions.map(getButtonItem)}
    </ResultItemPopOutComponent>
  );
}

ResultItemPopOutContainer.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  movie: PropTypes.shape(MovieDetailType).isRequired,
  onClick: PropTypes.func.isRequired,
};

const ResultItemPopOut = memo(ResultItemPopOutContainer);

export default ResultItemPopOut;
