import Avengers from '../../resources/avengers.JPG';
import Bohemian from '../../resources/bohemian-rhapsody.JPG';
import Inception from '../../resources/inception.JPG';
import KillBill from '../../resources/kill-bill.JPG';
import PulpFiction from '../../resources/pulp-fiction.JPG';
import Reservoir from '../../resources/reservoir-dogs.JPG';

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
    return [
      {
        id: 'm1',
        image: PulpFiction,
        title: 'Pulp Fiction',
        releaseDate: 2004,
        genre: ['Action & Adventure'],
      },
      {
        id: 'm2',
        image: Bohemian,
        title: 'Bohemian Rhapsody',
        releaseDate: 2003,
        genre: ['Drama', 'Biography', 'Music'],
      },
      {
        id: 'm3',
        image: KillBill,
        title: 'Kill Bill: Vol 2',
        releaseDate: 1994,
        genre: ['Oscar winning Movie'],
      },
      {
        id: 'm4',
        image: Avengers,
        title: 'Avengers: War of Infinity',
        releaseDate: 2004,
        genre: ['Action & Adventure'],
      },
      {
        id: 'm5',
        image: Inception,
        title: 'Inception',
        releaseDate: 2003,
        genre: ['Action & Adventure'],
      },
      {
        id: 'm6',
        image: Reservoir,
        title: 'Reservoir dogs',
        releaseDate: 1994,
        genre: ['Oscar winning Movie'],
      },
    ];
  },
};

export default MovieService;
