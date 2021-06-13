import Button from '@components/common/Forms/Button';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.scss';

function ResultItemPopOutComponent({ children }) {
  return (
    <div className="result-item__pop-out">
      <Button classes="pop-out__btn">
        <FontAwesomeIcon size="lg" icon={faEllipsisV} />
      </Button>
      <div className="pop-out__content">{children}</div>
    </div>
  );
}

export default ResultItemPopOutComponent;
