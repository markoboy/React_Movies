/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

function getButton(name, type, classes) {
  return {
    name,
    type,
    classes,
  };
}

function getPrimaryButton(name, type) {
  return getButton(name, type, 'btn--outline btn--full-width');
}

function getOutlineButton(name, type) {
  return getButton(name, type, 'btn--outline btn--full-width');
}

export const Actions = {
  ADD: 'Add',
  EDIT: 'Edit',
  DELETE: 'Delete',
  CONFIRM: 'Confirm',
};

export const defaultModalContext = {
  isOpened: false,
  setIsOpened() { },

  movie: null,
  setMovie() { },

  formInputs: null,
  setFormInputs() { },

  formBody: null,
  setFormBody() { },

  action: null,
  setAction() { },

  successMessage: null,
  setSuccessMessage() {},

  [Actions.ADD]: [
    getOutlineButton('Reset', 'reset'),
    getPrimaryButton('Submit', 'submit'),
  ],

  [Actions.EDIT]: [
    getOutlineButton('Reset', 'reset'),
    getPrimaryButton('Save', 'submit'),
  ],

  [Actions.DELETE]: [
    getPrimaryButton('Confirm', 'submit'),
  ],

  [Actions.CONFIRM]: [
    getPrimaryButton('Confirm', 'submit'),
  ],

  setModalState() { },
};

export const ModalContext = createContext(defaultModalContext);
