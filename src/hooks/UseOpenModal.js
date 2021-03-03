import { useContext } from 'react';

export default function useOpenModal(context) {
  const modalContext = useContext(context);

  return [modalContext, function setOpenModal({
    movie,
    formInputs,
    formBody,
    action,
    successMessage,
  }) {
    modalContext.setModalState({
      isOpened: true,
      movie,
      formInputs,
      formBody,
      action,
      successMessage,
    });
  }];
}
