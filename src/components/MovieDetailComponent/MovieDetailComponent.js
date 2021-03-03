import React from 'react';
import './MovieDetailComponent.scss';
import { MovieDetailType } from '@constants/MovieTypes';
import RowComponent from '@components/Grid/RowComponent/RowComponent';
import ColumnComponent from '@components/Grid/ColumnComponent/ColumnComponent';

function MovieDetailComponent({
  duration,
  rating,
  description,
  image,
  title,
  releaseDate,
  genre,
}) {
  return (
    <RowComponent>
      <ColumnComponent classes="column--m-3">
        <img src={image} alt={title} />
      </ColumnComponent>

      <ColumnComponent classes="column--m-9">
        <div className="movie-detail">

          <div className="movie-detail__heading-container">
            <h1 className="movie-detail__heading">{title}</h1>
            <p className="movie-detail__rating">{rating}</p>
          </div>

          <p className="movie-detail__genre">{genre.join(', ')}</p>

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

MovieDetailComponent.propTypes = MovieDetailType;

export default MovieDetailComponent;
