/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useClickListener from '@hooks/UseClickListener';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import './Modal.component.scss';

function ModalComponent({
  body,
  footer,
  title,
  onCloseTrigger,
}) {
  const handleClickOutside = useCallback((event) => {
    const el = event.target;

    if (el.classList.contains('modal')) {
      onCloseTrigger();
    }
  }, [onCloseTrigger]);

  useClickListener(document, handleClickOutside);

  return (
    <div className="modal">
      <div className="modal__content">
        <button
          type="button"
          className="modal__close-trigger"
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
