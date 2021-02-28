/* eslint-disable jsx-a11y/anchor-is-valid */
import ResultItemPopOutComponent from '@components/ResultItemPopOutComponent/ResultItemPopOutComponent';
import PropTypes from 'prop-types';
import React from 'react';
import './ResultListItemComponent.scss';

export default function ResultListItemComponent({
  image, title, releaseDate, genre, actions, id
}) {
  return (
    <div className="result-list__item">
      <a href="#">
        <img src={image} alt={title} />

        <div className="result-item__body flex flex--wrap">
          <h4 className="result-item__title">{title}</h4>
          <p className="result-item__release-date">{releaseDate}</p>
          <p className="result-item__genre">{genre.join(', ')}</p>
        </div>
      </a>

      {actions && actions.length && <ResultItemPopOutComponent id={id} actions={actions} />}
    </div>
  );
}

ResultListItemComponent.defaultProps = {
  actions: [],
};

ResultListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  actions: PropTypes.arrayOf(PropTypes.string),
};
