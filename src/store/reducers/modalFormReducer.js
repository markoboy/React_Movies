import {
  RESET_MODAL_FORM_STATE,
  SET_FORM_ACTION,
  SET_FORM_SELECTED_MOVIE,
} from '@store/action-types/modalFormTypes';

export const initialModalFormState = {
  selectedMovie: undefined,
  action: undefined,
};

export default function modalFormReducer(
  state = initialModalFormState,
  action
) {
  switch (action.type) {
    case SET_FORM_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };

    case SET_FORM_ACTION:
      return {
        ...state,
        action: action.payload,
      };

    case RESET_MODAL_FORM_STATE:
      return initialModalFormState;

    default:
      return state;
  }
}
