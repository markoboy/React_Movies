import Button from '@components/Forms/Button';
import withActionClick from '@components/HigherOrder/WithActionClick';
import { MovieDetailType } from '@constants/MovieTypes';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, {
  memo,
  useCallback,
} from 'react';
import './ResultItemPopOut.scss';

const WithActionClickButtonComponent = withActionClick(Button);

function ResultItemPopOut({ actions, movie, onClick }) {
  const handleButtonClick = useCallback(
    (action) => {
      onClick(action, movie);
    },
    [movie, onClick]
  );

  const getButtonItem = useCallback(
    (action) => (
      <WithActionClickButtonComponent
        key={`${movie.id}-${action}`}
        classes="btn--full-width btn--secondary pop-out-content__item"
        action={action}
        onClick={handleButtonClick}
      >
        {action}
      </WithActionClickButtonComponent>
    ),
    [movie]
  );

  return (
    <div className="result-item__pop-out">
      <Button classes="pop-out__btn">
        <FontAwesomeIcon size="lg" icon={faEllipsisV} />
      </Button>
      <div className="pop-out__content">{actions.map(getButtonItem)}</div>
    </div>
  );
}

ResultItemPopOut.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  movie: PropTypes.shape(MovieDetailType).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ResultItemPopOut);
