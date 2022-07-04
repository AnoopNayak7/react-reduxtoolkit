import React from "react";
import { useSelector } from "react-redux/es/exports";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../global/Cards/MovieCard";
import Container from "../global/shared/Container";
const MovieList = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies.Search);

  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="text-secondary">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div>
      <Container>
        <div className="grid grid-cols-5 gap-7">{renderMovies}</div>
      </Container>
    </div>
  );
};

export default MovieList;
