import React from 'react';

export default class MovieRow extends React.Component {
	   render() {
	      return (
	         <div className="movie">
                  <div className="movie-name">{this.props.data.title}</div>
                  <div className="movie-year">Year: {this.props.data.year}</div>
             </div>
	      );
	   }
	}
