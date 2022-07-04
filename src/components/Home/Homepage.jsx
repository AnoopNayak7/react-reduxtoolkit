import React, { useEffect, Suspense } from "react";
// import MovieList from "../MovieListing/MovieList";
import { useDispatch } from "react-redux";
import { fetchMoviesAsync } from "../../features/movies/movieSlice";

const MovieList = React.lazy(() => import("../MovieListing/MovieList"));

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchMoviesAsync());
  }, [dispatch]);
  return (
    <div className="">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <MovieList />
      </Suspense>
    </div>
  );
};

export default Homepage;
