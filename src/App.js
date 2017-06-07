import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var movies = [
	{title: 'Up', year: 2009},
	{title: 'A Series of Unfortunate Events', year: 2004},
	{title: 'The Prestige', year: 2006},
	{title: 'Prometheus', year: 2012},
	{title: 'Shrek', year: 2001},
	{title: '50/50', year: 2011},
	{title: 'Salt', year: 2010},
    {title: 'World War Z', year: 2013},
    {title: 'Life of Pi', year: 2012},
    {title: 'Brokeback Mountain', year: 2005},
    {title: 'Crouching Tiger, Hidden Dragon', year: 2000},
    {title: 'The Wedding Banquet', year: 1993}
  ];

  var moviesFiltered = [];

class App extends Component {

    render() {
        return (
            <div>
                <h1>Movies with React</h1>
                <h2>List of Movies</h2>
                <div className="search">
                	<div className="search-label">Looking for a specific movie?</div>
                	<input type="text" onChange={filterMovies} id="txt_search" name="txt_search" placeholder="Search.." className="search-textinput"/>
                </div>
                <div id="movies">
                	{movies.map((movie, i) => <MovieRow key = {i} data = {movie} />)}
                </div>
            </div>
        );
    }
}

function filterMovies() {
	    
	 var keyword = document.getElementById("txt_search").value.toLowerCase();
	 if(keyword.length>0){
	 	moviesFiltered = [];
	 	var i = 0;
	 	for(i=0;i<movies.length;i++){
	 		var title = movies[i]['title'].toLowerCase();
	 		if(title.search(keyword)>-1){
	 			moviesFiltered.push(movies[i]);
	 		}
	 	}
	 }else{
	 	moviesFiltered = movies;
	 }
	 ReactDOM.render(
				    <Clock />,
				    document.getElementById('movies')
				  );
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


class Clock extends React.Component {
  render() {
    return (
      <div>
        {moviesFiltered.map((movie, i) => <MovieRow key = {i} data = {movie} />)}
      </div>
    );
  }
}

export default App;
