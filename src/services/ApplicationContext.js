/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

export const defaultApplicationContext = {
  selectedMovieId: null,
  setSelectedMovieId() {},
};

export const ApplicationContext = createContext(defaultApplicationContext);
