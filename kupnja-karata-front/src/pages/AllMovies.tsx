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
  return (
    <>
      <h1>All program</h1>
      <div className="all-movies">
        {movies.slice(0, 16).map((movie: any) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </>
  );
};
