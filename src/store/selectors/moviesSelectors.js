export const moviesStateSelector = (store) => store.movies;

export const moviesSelector = (store) => moviesStateSelector(store).movies;
export const selectedMovieSelector = (store) => moviesStateSelector(store).selectedMovie;
export const moviesTotalAmountSelector = (store) => moviesStateSelector(store).totalAmount;
export const moviesFilterSelector = (store) => moviesStateSelector(store).filter;
export const moviesSortBySelector = (store) => moviesStateSelector(store).sortBy;
