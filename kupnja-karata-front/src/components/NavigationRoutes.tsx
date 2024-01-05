import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import { Home, AllMovies, MovieSeat, MovieDetails } from "../pages";

const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allmovies" element={<AllMovies />} />
        <Route path="/movieseat" element={<MovieSeat />} />
        <Route path="/moviedetails" element={<MovieDetails />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default NavigationRoutes;
