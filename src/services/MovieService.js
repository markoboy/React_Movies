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
    duration: 135,
    rating: 4.3,
    description:
      'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
  },
  {
    id: 'm2',
    image: Bohemian,
    title: 'Bohemian Rhapsody',
    releaseDate: new Date(2003, 0),
    genre: ['Drama', 'Biography', 'Music'],
    duration: 135,
    rating: 4.3,
    description:
      "Bohemian Rhapsody is a 2018 biographical drama film directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of Freddie Mercury, the lead singer of the British rock musical band Queen. The film stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, and Mike Myers. Queen members Brian May and Roger Taylor served as consultants. A British-American venture, the film was produced by 20th Century Fox, Regency Enterprises, GK Films, and Queen Films, with Fox serving as distributor. The film follows the singer's life from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium.",
  },
  {
    id: 'm3',
    image: KillBill,
    title: 'Kill Bill: Vol 2',
    releaseDate: new Date(1994, 0),
    genre: ['Oscar winning Movie'],
    duration: 135,
    rating: 4.3,
    description:
      'Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who continues her campaign of revenge against the Deadly Viper Assassination Squad (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine), who tried to kill her and her unborn child.',
  },
  {
    id: 'm4',
    image: Avengers,
    title: 'Avengers: War of Infinity',
    releaseDate: new Date(2004, 0),
    genre: ['Action & Adventure'],
    duration: 135,
    rating: 4.3,
    description:
      'Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe.',
  },
  {
    id: 'm5',
    image: Inception,
    title: 'Inception',
    releaseDate: new Date(2003, 0),
    genre: ['Action & Adventure'],
    duration: 135,
    rating: 4.3,
    description:
      "Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.",
  },
  {
    id: 'm6',
    image: Reservoir,
    title: 'Reservoir dogs',
    releaseDate: new Date(1994, 0),
    genre: ['Oscar winning Movie'],
    duration: 135,
    rating: 4.3,
    description:
      "Reservoir Dogs is a 1992 American crime film written and directed by Quentin Tarantino in his feature-length debut. It stars Harvey Keitel, Tim Roth, Chris Penn, Steve Buscemi, Lawrence Tierney, Michael Madsen, Tarantino, and Edward Bunker as diamond thieves whose planned heist of a jewelry store goes terribly wrong. The film depicts the events before and after the heist. Kirk Baltz, Randy Brooks, and Steven Wright also play supporting roles. It incorporates many motifs that have become Tarantino's hallmarks: violent crime, pop culture references, profanity, and nonlinear storytelling.",
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

  getMovieById(id) {
    return movies.find((m) => m.id === id);
  },

  addMovie({ moviesState, movie }) {
    lastMovieId += 1;

    movies = moviesState.concat([
      {
        image: '',
        ...movie,
        genre: movie.genre.map((g) => g.label),
        id: `m${lastMovieId}`,
      },
    ]);

    return movies;
  },

  editMovie({ moviesState, movie }) {
    movies = moviesState.map((m) => (m.id === movie.id ? movie : m));

    return movies;
  },

  deleteMovie({ moviesState, movieId }) {
    movies = moviesState.filter((m) => m.id !== movieId);

    return movies;
  },

  sortByTitle(mov) {
    return [...mov].sort((a, b) => {
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
    return [...mov].sort((a, b) => b.releaseDate - a.releaseDate);
  },
};

export default MovieService;
