import { Actions } from '@services/ModalContext';
import getModalFormInputs from '@utils/getModalFormInputs';
import getSerializedModalFormInputs from '@utils/getSerializedModalFormInputs';
import { useReducer } from 'react';
import { MoviesDispatchActions } from './UseMoviesState';

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

function submitReducer(state, dispatchMovieAction) {
  const { action, formInputs, movie } = state;

  switch (action) {
    case Actions.DELETE:
      dispatchMovieAction({
        type: MoviesDispatchActions.DELETE,
        payload: movie.id,
      });
      break;

    case Actions.EDIT:
      dispatchMovieAction({
        type: MoviesDispatchActions.EDIT,
        payload: {
          ...movie,
          ...getSerializedModalFormInputs(formInputs),
        },
      });
      break;

    case Actions.ADD:
      dispatchMovieAction({
        type: MoviesDispatchActions.ADD,
        payload: getSerializedModalFormInputs(formInputs),
      });
      break;

    default:
      return closeReducer(state);
  }

  return {
    ...state,
    action: Actions.CONFIRM,
    formBody: state.successMessage,
  };
}

export default function useModalState(initialState, dispatchMovieAction) {
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

      case ModalDispatchActions.SUBMIT:
        return submitReducer(state, dispatchMovieAction);

      default:
        return state;
    }
  }, initialState);
}
