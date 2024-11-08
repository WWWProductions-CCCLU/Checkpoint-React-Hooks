// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "150px" }} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}/5</p>
    </div>
  );
};

export default MovieCard;
