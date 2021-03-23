import {
  RESET_MODAL_STATE,
  SET_IS_OPENED_MODAL,
  SET_MODAL_TITLE,
} from '@store/action-types/modalActionTypes';

const initialModalState = {
  isOpened: false,
  title: '',
};

export default function modalReducer(state = initialModalState, action) {
  switch (action.type) {
    case SET_IS_OPENED_MODAL:
      return {
        ...state,
        isOpened: action.payload,
      };

    case SET_MODAL_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case RESET_MODAL_STATE:
      return initialModalState;

    default:
      return state;
  }
}
