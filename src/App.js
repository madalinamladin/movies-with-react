import React, { Component } from 'react';

var movies = [
    {title: 'Life of Pi', year: 2012},
    {title: 'Brokeback Mountain', year: 2005},
    {title: 'Crouching Tiger, Hidden Dragon', year: 2000},
    {title: 'The Wedding Banquet', year: 1993}
  ];

class App extends Component {

    render() {
        return (
            <div>
                <h1>Movies with React</h1>
                <h2>List of Movies</h2>
                <div className="search">
                	<div className="search-label">Looking for a specific movie?</div>
                	<input type="text" onChange={this.handleChange} id="txt_search" name="txt_search" placeholder="Search.." className="search-textinput"/>
                </div>
                {movies.map((movie, i) => <MovieRow key = {i} data = {movie} />)}
            </div>
        );
    }
}

class MovieRow extends React.Component {
	   render() {
	      return (
	         <div className="movie">
                  <div className="movie-name">{this.props.data.title}</div>
                  <div className="movie-year">Year: {this.props.data.year}</div>
             </div>
	      );
	   }
	}


export default App;
