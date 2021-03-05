import React, { useState } from 'react';
import './MovieDetailComponent.scss';
import { MovieDetailType } from '@constants/MovieTypes';
import RowComponent from '@components/Grid/RowComponent/RowComponent';
import ColumnComponent from '@components/Grid/ColumnComponent/ColumnComponent';

function MovieDetailComponent(props) {
  const {
    duration,
    rating,
    description,
    image,
    title,
    releaseDate,
    genres,
    fallbackImage,
  } = props;
  if (!duration || !rating || !description || !image || !title || !releaseDate || !genres) {
    throw new Error(`Please include all props for MovieDetailComponent. ${Object.keys(props)}`);
  }

  const [imageSrc, setImageSrc] = useState(image);

  return (
    <RowComponent>
      <ColumnComponent classes="column--m-3">
        <img src={imageSrc} alt={title} onError={() => setImageSrc(fallbackImage)} />
      </ColumnComponent>

      <ColumnComponent classes="column--m-9">
        <div className="movie-detail">

          <div className="movie-detail__heading-container">
            <h1 className="movie-detail__heading">{title}</h1>
            <p className="movie-detail__rating">{rating}</p>
          </div>

          <p className="movie-detail__genre">{genres.join(', ')}</p>

          <div className="movie-detail__year-container">
            <p>{releaseDate.getFullYear()}</p>
            <p className="movie-detail__duration">{`${duration} min`}</p>
          </div>

          <p className="movie-detail__description">{description}</p>
        </div>
      </ColumnComponent>
    </RowComponent>
  );
}

MovieDetailComponent.defaultProps = {
  fallbackImage: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg',
};

MovieDetailComponent.propTypes = MovieDetailType;

export default MovieDetailComponent;
