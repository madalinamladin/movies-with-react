import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import m from './constants/Movies.js';
import MovieRow from './components/MovieRow.jsx';
import MoviesFilter from './components/MoviesFilter.jsx';

var movies = m.data;

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
				    <MoviesFilter moviesFiltered={moviesFiltered}/>,
				    document.getElementById('movies')
				  );
}

export default App;
