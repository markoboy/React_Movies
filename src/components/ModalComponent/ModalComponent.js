/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './ModalComponent.scss';

export default function ModalComponent({
  body,
  footer,
  title,
  onCloseTrigger,
}) {
  /**
   * Close the modal when modal is clicked outside of the content
   * @param {Event} event
   */
  const handleModalClick = (event) => {
    const el = event.target;
    if (el.classList.contains('modal')) {
      onCloseTrigger();
    }
  };

  return (
    <div className="modal" onClick={handleModalClick}>
      <div className="modal__content">
        <button
          type="button"
          className="modal__close-trigger"
          onClick={onCloseTrigger}
        >
          <FontAwesomeIcon size="2x" icon={faTimes} />
        </button>
        <h3 className="modal__header">{title}</h3>

        <div className="modal__body">{body}</div>

        <div className="modal__footer">{footer}</div>
      </div>
    </div>
  );
}

ModalComponent.propTypes = {
  body: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  onCloseTrigger: PropTypes.func.isRequired,
};
