import { combineReducers } from 'redux';
import modalFormReducer from './modalFormReducer';
import modalReducer from './modalReducer';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  modal: modalReducer,
  modalForm: modalFormReducer,
});

export default rootReducer;
