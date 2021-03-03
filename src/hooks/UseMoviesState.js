import MovieService from '@services/MovieService';
import { useReducer } from 'react';

export const MoviesDispatchActions = {
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
  INIT: 'init'
};

export default function useMoviesState(initialState) {
  return useReducer((state, action) => {
    switch (action.type) {
      case MoviesDispatchActions.ADD:
        return MovieService.addMovie({ moviesState: state, movie: action.payload });

      case MoviesDispatchActions.EDIT:
        return MovieService.editMovie({ moviesState: state, movie: action.payload });

      case MoviesDispatchActions.DELETE:
        return MovieService.deleteMovie({ moviesState: state, movieId: action.payload });

      case MoviesDispatchActions.INIT:
        return [...state, ...action.payload];

      default:
        throw new Error(`${action.type} is not configured!`);
    }
  }, initialState);
}
