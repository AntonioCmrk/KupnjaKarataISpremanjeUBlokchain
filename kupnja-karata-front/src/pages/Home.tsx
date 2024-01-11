import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import "./Home.css";

export const Home = () => {
  const randNum = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
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
    <div className="home">
      <h1>Featured</h1>
      <div className="featured">
        {movies.slice(randNum, randNum + 4).map((movie: any) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  );
};
