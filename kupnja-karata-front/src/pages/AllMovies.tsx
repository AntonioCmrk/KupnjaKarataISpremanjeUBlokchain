import React, { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import "./AllMovies.css";

export const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/movies_2.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(movies);
  return (
    <div className="all-movies">
      {movies.map((movie: any) => (
        <MovieCard movie={movie} key={movie._id} />
      ))}
    </div>
  );
};
