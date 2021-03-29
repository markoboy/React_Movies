import {
  RESET_MODAL_FORM_STATE,
  SET_FORM_ACTION,
  SET_FORM_SELECTED_MOVIE,
} from '@store/action-types/modalFormTypes';

export const setFormSelectedMovieCreator = (movie) => ({
  type: SET_FORM_SELECTED_MOVIE,
  payload: movie,
});

export const setFormActionCreator = (action) => ({
  type: SET_FORM_ACTION,
  payload: action,
});

export const resetModalFormStateCreator = () => ({
  type: RESET_MODAL_FORM_STATE,
});
