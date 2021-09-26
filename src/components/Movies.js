import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
          <div>
            <h2>Title: {movie.title}</h2>
            <strong>Time: {movie.time} minutes</strong>
            <ul><strong>Genre(s):</strong>
              {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>
          </div>
        )})}
    </div>
  );
};

export default Movies;
