import {
  RESET_MODAL_FORM_STATE,
  SET_FORM_ACTION,
  SET_FORM_INPUTS,
  SET_FORM_SELECTED_MOVIE,
  UPDATE_FORM_INPUT,
} from '@store/action-types/modalFormTypes';
import updateFormInputValue from '@utils/updateFormInputValue';

const initialModalFormState = {
  selectedMovie: null,
  inputs: null,
  action: null,
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

    case SET_FORM_INPUTS:
      return {
        ...state,
        inputs: action.payload,
      };

    case SET_FORM_ACTION:
      return {
        ...state,
        action: action.payload,
      };

    case UPDATE_FORM_INPUT:
      return {
        ...state,
        inputs: state.inputs.map(
          updateFormInputValue(action.payload.input, action.payload.value)
        ),
      };

    case RESET_MODAL_FORM_STATE:
      return initialModalFormState;

    default:
      return state;
  }
}
