const generateModalActionType = (action) => `[MODAL] ${action}`;

export const SET_IS_OPENED_MODAL = generateModalActionType('SET_IS_OPENED_MODAL');
export const SET_MODAL_TITLE = generateModalActionType('SET_MODAL_TITLE');
export const RESET_MODAL_STATE = generateModalActionType('RESET_MODAL_STATE');
