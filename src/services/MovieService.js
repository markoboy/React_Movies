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
        image: '',
        title: 'Pulp Fiction',
        year: 2004,
        category: ['Action & Adventure'],
      },
      {
        id: 'm2',
        image: '',
        title: 'Bohemian Rhapsody',
        year: 2003,
        category: ['Drama', 'Biography', 'Music'],
      },
      {
        id: 'm3',
        image: '',
        title: 'Kill Bill: Vol 2',
        year: 1994,
        category: ['Oscar winning Movie'],
      },
      {
        id: 'm4',
        image: '',
        title: 'Avengers: War of Infinity',
        year: 2004,
        category: ['Action & Adventure'],
      },
      {
        id: 'm5',
        image: '',
        title: 'Inception',
        year: 2003,
        category: ['Action & Adventure'],
      },
      {
        id: 'm6',
        image: '',
        title: 'Reservoir dogs',
        year: 1994,
        category: ['Oscar winning Movie'],
      },
    ];
  },
};

export default MovieService;
