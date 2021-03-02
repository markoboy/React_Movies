import Avengers from '../../resources/avengers.JPG';
import Bohemian from '../../resources/bohemian-rhapsody.JPG';
import Inception from '../../resources/inception.JPG';
import KillBill from '../../resources/kill-bill.JPG';
import PulpFiction from '../../resources/pulp-fiction.JPG';
import Reservoir from '../../resources/reservoir-dogs.JPG';

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
        sort: 'release date',
      },
      {
        id: 's2',
        sort: 'name',
      },
      {
        id: 's3',
        sort: 'rating',
      },
    ];
  },

  getMovies() {
    return movies;
  },

  addMovie(movie) {
    lastMovieId += 1;

    movies = movies.concat([{
      image: '',
      ...movie,
      genre: movie.genre.map((g) => g.label),
      id: `m${lastMovieId}`
    }]);

    return movies;
  },

  editMovie(movieId, movie) {
    movies = movies.map((m) => (m.id === movieId ? movie : m));

    return movies;
  },

  deleteMovie(movieId) {
    movies = movies.filter((m) => m.id !== movieId);

    return movies;
  },
};

export default MovieService;
