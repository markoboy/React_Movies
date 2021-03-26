import Modal from '@components/common/Modal';
import PropTypes from 'prop-types';
import React from 'react';

export default function ModalFormComponent({
  onSubmit,
  onReset,
  title,
  onCloseTrigger,
  body,
  footer,
}) {
  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <Modal
        title={title}
        onCloseTrigger={onCloseTrigger}
        body={body}
        footer={footer}
      />
    </form>
  );
}

ModalFormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onCloseTrigger: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,
};
