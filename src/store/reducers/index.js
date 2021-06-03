import modalFormReducer from './modalFormReducer';
import modalReducer from './modalReducer';
import moviesReducer from './moviesReducer';

const rootReducerMap = {
  movies: moviesReducer,
  modal: modalReducer,
  modalForm: modalFormReducer,
};

export default rootReducerMap;
