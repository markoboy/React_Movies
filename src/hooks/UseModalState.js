import getModalFormInputs from '@utils/getModalFormInputs';
import { useReducer } from 'react';

export const ModalDispatchActions = {
  SUBMIT: 'submit',
  RESET: 'reset',
  CHANGE: 'change',
  OPEN: 'open',
  CLOSE: 'close',
};

function formInputsChangeReducer(state, { input, value }) {
  return {
    ...state,
    formInputs: state.formInputs.map((fInput) => {
      if (fInput === input) {
        return {
          ...fInput,
          value,
        };
      }

      return fInput;
    }),
  };
}

function closeReducer(state) {
  return {
    ...state,
    isOpened: false,
    movie: null,
    formInputs: null,
    formBody: null,
    action: null,
  };
}

export default function useModalState(initialState) {
  return useReducer((state, action) => {
    switch (action.type) {
      case ModalDispatchActions.CHANGE:
        return formInputsChangeReducer(state, action.payload);

      case ModalDispatchActions.RESET:
        return {
          ...state,
          formInputs: getModalFormInputs(state.movie || {}),
        };

      case ModalDispatchActions.OPEN:
        return {
          ...state,
          ...action.payload,
          isOpened: true,
        };

      case ModalDispatchActions.CLOSE:
        return closeReducer(state);

      default:
        return state;
    }
  }, initialState);
}
