export const moviesStateSelector = (store) => store.movies;

export const moviesSelector = (store) => moviesStateSelector(store).items;
export const selectedMovieSelector = (store) => moviesStateSelector(store).selectedMovie;
export const moviesTotalAmountSelector = (store) => moviesStateSelector(store).totalAmount;

export const moviesFilterSelector = (store) => moviesStateSelector(store).filter;
export const moviesSortBySelector = (store) => moviesStateSelector(store).sortBy;

export const moviesStatusSelector = (store) => moviesStateSelector(store).status;
export const moviesErrorSelector = (store) => moviesStateSelector(store).error;
export const moviesSuccessSelector = (store) => moviesStateSelector(store).success;

export const moviesInvalidateSelector = (store) => moviesStateSelector(store).invalidate;
