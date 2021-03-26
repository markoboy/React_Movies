import useClickListener from '@hooks/UseClickListener';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import ModalComponent from './component';
import './styles.scss';

function ModalContainer({ body, footer, title, onCloseTrigger }) {
  const handleClickOutside = useCallback(
    (event) => {
      const el = event.target;

      if (el.classList.contains('modal')) {
        onCloseTrigger();
      }
    },
    [onCloseTrigger]
  );

  useClickListener(document, handleClickOutside);

  return (
    <ModalComponent
      title={title}
      body={body}
      footer={footer}
      onCloseTrigger={onCloseTrigger}
    />
  );
}

ModalContainer.defaultProps = {
  footer: null,
  title: null,
};

ModalContainer.propTypes = {
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
  title: PropTypes.string,
  onCloseTrigger: PropTypes.func.isRequired,
};

export default memo(ModalContainer);
