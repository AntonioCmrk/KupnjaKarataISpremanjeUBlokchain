import { useState } from "react";
import "./MovieCard.css";

export const MovieCard = ({ movie }: any) => {
  return (
    <div className="movie-card">
      <img
        className="movie-card-img"
        src={movie.poster_path}
        alt={movie.original_title}
      />
      {movie.title}
    </div>
  );
};
