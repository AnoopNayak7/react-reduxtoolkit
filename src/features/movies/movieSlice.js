import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { apiKey } from "../../common/apis/MovieApiKeys";

export const fetchMoviesAsync = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Avenger";
    
    const response = await movieApi.get(
      `?apiKey=${apiKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMoviesAsync.pending]: () => {
      console.log("pending");
    },
    [fetchMoviesAsync.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return {...state,movies:payload};
    },
    [fetchMoviesAsync.rejected]: () => {
        console.log("Rejected");
      },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
