import {
  RESET_MODAL_STATE,
  SET_IS_OPENED_MODAL,
  SET_MODAL_TITLE,
} from '@store/action-types/modalActionTypes';

export const setIsOpenedModalCreator = (isOpened) => ({
  type: SET_IS_OPENED_MODAL,
  payload: isOpened,
});

export const setModalTitleCreator = (modalTitle) => ({
  type: SET_MODAL_TITLE,
  payload: modalTitle,
});

export const resetModalStateCreator = () => ({
  type: RESET_MODAL_STATE,
});
