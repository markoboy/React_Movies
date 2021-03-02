import Avengers from '../../resources/avengers.JPG';
import Bohemian from '../../resources/bohemian-rhapsody.JPG';
import Inception from '../../resources/inception.JPG';
import KillBill from '../../resources/kill-bill.JPG';
import PulpFiction from '../../resources/pulp-fiction.JPG';
import Reservoir from '../../resources/reservoir-dogs.JPG';

export const SortOptions = {
  RELEASE: 'Release Date',
  TITLE: 'Title',
};

let movies = [
  {
    id: 'm1',
    image: PulpFiction,
    title: 'Pulp Fiction',
    releaseDate: new Date(2004, 0),
    genre: ['Action & Adventure'],
  },
  {
    id: 'm2',
    image: Bohemian,
    title: 'Bohemian Rhapsody',
    releaseDate: new Date(2003, 0),
    genre: ['Drama', 'Biography', 'Music'],
  },
  {
    id: 'm3',
    image: KillBill,
    title: 'Kill Bill: Vol 2',
    releaseDate: new Date(1994, 0),
    genre: ['Oscar winning Movie'],
  },
  {
    id: 'm4',
    image: Avengers,
    title: 'Avengers: War of Infinity',
    releaseDate: new Date(2004, 0),
    genre: ['Action & Adventure'],
  },
  {
    id: 'm5',
    image: Inception,
    title: 'Inception',
    releaseDate: new Date(2003, 0),
    genre: ['Action & Adventure'],
  },
  {
    id: 'm6',
    image: Reservoir,
    title: 'Reservoir dogs',
    releaseDate: new Date(1994, 0),
    genre: ['Oscar winning Movie'],
  },
];

let lastMovieId = movies.length;

const MovieService = {
  getAvailableFilters() {
    return [
      {
        id: 'f1',
        genre: 'all',
      },
      {
        id: 'f2',
        genre: 'documentary',
      },
      {
        id: 'f3',
        genre: 'comedy',
      },
      {
        id: 'f4',
        genre: 'horror',
      },
      {
        id: 'f5',
        genre: 'crime',
      },
    ];
  },

  getSortOptions() {
    return [
      {
        id: 's1',
        sort: SortOptions.RELEASE,
      },
      {
        id: 's2',
        sort: SortOptions.TITLE,
      },
    ];
  },

  getMovies() {
    return movies;
  },

  addMovie(movie) {
    lastMovieId += 1;

    movies = movies.concat([
      {
        image: '',
        ...movie,
        genre: movie.genre.map((g) => g.label),
        id: `m${lastMovieId}`,
      },
    ]);

    return movies;
  },

  editMovie(id, movie) {
    movies = movies.map((m) => (m.id === id ? movie : m));

    return movies;
  },

  deleteMovie(movieId) {
    movies = movies.filter((m) => m.id !== movieId);

    return movies;
  },

  sortByTitle(mov) {
    return mov.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  },

  sortByDate(mov) {
    return mov.sort((a, b) => b.releaseDate - a.releaseDate);
  }
};

export default MovieService;
