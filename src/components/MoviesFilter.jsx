import React from 'react';
import MovieRow from './MovieRow.jsx';

export default class MoviesFilter extends React.Component {
  render() {
    return (
      <div>
        {this.props.moviesFiltered.map((movie, i) => <MovieRow key = {i} data = {movie} />)}
      </div>
    );
  }
}
