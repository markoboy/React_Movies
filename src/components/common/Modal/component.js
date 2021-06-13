/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import './styles.scss';

function ModalComponent({ body, footer, title, onCloseTrigger }) {
  return (
    <div className="modal" data-testid="modal">
      <div className="modal__content">
        <button
          type="button"
          className="modal__close-trigger"
          data-testid="modal-close-trigger"
          onClick={onCloseTrigger}
        >
          <FontAwesomeIcon size="2x" icon={faTimes} />
        </button>

        {title && <h3 className="modal__header">{title}</h3>}

        <div className="modal__body">{body}</div>

        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  );
}

ModalComponent.defaultProps = {
  footer: null,
  title: null,
};

ModalComponent.propTypes = {
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
  title: PropTypes.string,
  onCloseTrigger: PropTypes.func.isRequired,
};

export default memo(ModalComponent);
