import {
  RESET_MODAL_FORM_STATE,
  SET_FORM_ACTION,
  SET_FORM_INPUTS,
  SET_FORM_SELECTED_MOVIE,
  UPDATE_FORM_INPUT,
} from '@store/action-types/modalFormTypes';

export const setFormSelectedMovieCreator = (movie) => ({
  type: SET_FORM_SELECTED_MOVIE,
  payload: movie,
});

export const setFormInputsCreator = (inputs) => ({
  type: SET_FORM_INPUTS,
  payload: inputs,
});

export const setFormActionCreator = (action) => ({
  type: SET_FORM_ACTION,
  payload: action,
});

export const updateFormInputCreator = (input, value) => ({
  type: UPDATE_FORM_INPUT,
  payload: {
    input,
    value,
  },
});

export const resetModalFormStateCreator = () => ({
  type: RESET_MODAL_FORM_STATE,
});
