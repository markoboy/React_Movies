import Column from '@components/Grid/Column';
import Row from '@components/Grid/Row';
import { MOVIE_FALLBACK_IMAGE } from '@constants/Generic';
import { MovieDetailType } from '@constants/MovieTypes';
import useFallbackImage from '@hooks/UseFallbackImage';
import React, { memo } from 'react';
import './MovieDetail.scss';

function MovieDetail({
  runtime,
  vote_average: rating,
  overview,
  image,
  title,
  releaseDate,
  genres,
  fallbackImage,
}) {
  const { imageSrc, setFallbackImageSrc } = useFallbackImage(image, fallbackImage);

  return (
    <Row>
      <Column classes="column--m-3">
        <img src={imageSrc} alt={title} onError={setFallbackImageSrc} />
      </Column>

      <Column classes="column--m-9">
        <div className="movie-detail">

          <div className="movie-detail__heading-container">
            <h1 className="movie-detail__heading">{title}</h1>
            {!!rating && <p className="movie-detail__rating">{rating}</p>}
          </div>

          <p className="movie-detail__genre">{genres.join(', ')}</p>

          <div className="movie-detail__year-container">
            {releaseDate && <p>{releaseDate.getFullYear()}</p>}
            {runtime && <p className="movie-detail__duration">{`${runtime} min`}</p>}
          </div>

          <p className="movie-detail__description">{overview}</p>
        </div>
      </Column>
    </Row>
  );
}

MovieDetail.defaultProps = {
  fallbackImage: MOVIE_FALLBACK_IMAGE,
};

MovieDetail.propTypes = MovieDetailType;

export default memo(MovieDetail);
