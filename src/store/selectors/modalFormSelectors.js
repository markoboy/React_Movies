export const modalFormStateSelector = (store) => store.modalForm;

export const modalFormSelectedMovieSelector = (store) => (
  modalFormStateSelector(store).selectedMovie
);

export const modalFormInputsSelector = (store) => (
  modalFormStateSelector(store).inputs
);

export const modalFormActionSelector = (store) => (
  modalFormStateSelector(store).action
);
