import Modal from '@components/common/Modal';
import PropTypes from 'prop-types';
import React from 'react';

export default function ModalFormComponent({
  title,
  onCloseTrigger,
  body,
}) {
  return (
    <Modal
      title={title}
      onCloseTrigger={onCloseTrigger}
      body={body}
    />
  );
}

ModalFormComponent.propTypes = {
  onCloseTrigger: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};
