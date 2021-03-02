import FooterContainer from '@containers/FooterContainer/FooterContainer';
import HeaderNavContainer from '@containers/HeaderNavContainer/HeaderNavContainer';
import SiteContainer from '@containers/SiteContainer/SiteContainer';
import MovieService from '@services/MovieService';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleEditMovie = this.handleEditMovie.bind(this);
    this.handelDeleteMovie = this.handelDeleteMovie.bind(this);
  }

  componentDidMount() {
    const movies = MovieService.getMovies();

    this.setState({
      movies,
    });
  }

  handleAddMovie(movie) {
    const movies = MovieService.addMovie(movie);

    this.setState({
      movies,
    });
  }

  handleEditMovie(movieId, movie) {
    const movies = MovieService.editMovie(movieId, movie);

    this.setState({
      movies,
    });
  }

  handelDeleteMovie(movieId) {
    const movies = MovieService.deleteMovie(movieId);

    this.setState({
      movies,
    });
  }

  render() {
    return (
      <>
        <HeaderNavContainer onAddMovie={this.handleAddMovie} />
        <SiteContainer
          movies={this.state.movies}
          onEditMovie={this.handleEditMovie}
          onDeleteMovie={this.handelDeleteMovie}
        />
        <FooterContainer />
      </>
    );
  }
}
