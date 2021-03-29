export const modalFormStateSelector = (store) => store.modalForm;

export const modalFormSelectedMovieSelector = (store) => (
  modalFormStateSelector(store).selectedMovie
);

export const modalFormActionSelector = (store) => (
  modalFormStateSelector(store).action
);
