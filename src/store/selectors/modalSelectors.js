export const modalStateSelector = (store) => store.modal;

export const modalIsOpenedSelector = (store) => modalStateSelector(store).isOpened;
export const modalTitleSelector = (store) => modalStateSelector(store).title;
