const generateModalFormActionType = (action) => `[MODAL_FORM] ${action}`;

export const SET_FORM_SELECTED_MOVIE = generateModalFormActionType('SET_FORM_SELECTED_MOVIE');
export const SET_FORM_INPUTS = generateModalFormActionType('SET_FORM_INPUTS');
export const SET_FORM_ACTION = generateModalFormActionType('SET_FORM_ACTION');
export const UPDATE_FORM_INPUT = generateModalFormActionType('UPDATE_FORM_INPUT');

export const RESET_MODAL_FORM_STATE = generateModalFormActionType('RESET_MODAL_FORM_STATE');
