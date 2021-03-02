import ButtonComponent from '@components/Forms/ButtonComponent/ButtonComponent';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './ResultItemPopOutComponent.scss';

export default function ResultItemPopOutComponent({
  actions,
  id,
  onActionClick,
}) {
  return (
    <div className="result-item__pop-out">
      <ButtonComponent classes="pop-out__btn">
        <FontAwesomeIcon size="lg" icon={faEllipsisV} />
      </ButtonComponent>
      <div className="pop-out__content">
        {actions.map((action) => (
          <ButtonComponent
            key={`${id}-${action}`}
            classes="btn--full-width btn--secondary pop-out-content__item"
            onButtonClick={() => onActionClick(action)}
          >
            {action}
          </ButtonComponent>
        ))}
      </div>
    </div>
  );
}

ResultItemPopOutComponent.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  onActionClick: PropTypes.func.isRequired,
};
