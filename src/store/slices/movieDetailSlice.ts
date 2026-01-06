import { createSlice } from '@reduxjs/toolkit';
import {
  MovieDetailsResponse,
  MovieImages,
  MovieResponse,
  MovieCredits,
  MovieVideos,
} from '../../types/movieTypes';
import {
  getMovieDetailsAction,
  getMovieImagesAction,
  getMovieVideosAction,
  getSimilarMoviesAction,
  getMovieCreditsAction,
} from '../actions/moviesActions';

export interface MovieDetailsState {
  loading: boolean;
  movieDetail: MovieDetailsResponse | null;
  movieImages: MovieImages | null;
  similarMovies: MovieResponse | null;
  movieVideos: MovieVideos | null;
  movieCredits: MovieCredits | null;
}

const initialState: MovieDetailsState = {
  loading: false,
  movieDetail: null,
  movieImages: null,
  similarMovies: null,
  movieVideos: null,
  movieCredits: null,
};

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    setMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    setMovieImages: (state, action) => {
      state.movieImages = action.payload;
    },
    setSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    setMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },
    setMovieCredits: (state, action) => {
      state.movieCredits = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getMovieDetailsAction.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
      state.loading = false;
    });
    builder.addCase(getMovieDetailsAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getMovieDetailsAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getMovieImagesAction.fulfilled, (state, action) => {
      state.movieImages = action.payload;
      state.loading = false;
    });
    builder.addCase(getMovieImagesAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getMovieImagesAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getSimilarMoviesAction.fulfilled, (state, action) => {
      state.similarMovies = action.payload;
      state.loading = false;
    });
    builder.addCase(getSimilarMoviesAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getSimilarMoviesAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getMovieVideosAction.fulfilled, (state, action) => {
      state.movieVideos = action.payload;
      state.loading = false;
    });
    builder.addCase(getMovieVideosAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getMovieVideosAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getMovieCreditsAction.fulfilled, (state, action) => {
      state.movieCredits = action.payload;
      state.loading = false;
    });
    builder.addCase(getMovieCreditsAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getMovieCreditsAction.rejected, state => {
      state.loading = false;
    });
  },
});
export const {
  setMovieDetail,
  setMovieImages,
  setSimilarMovies,
  setMovieVideos,
  setMovieCredits,
} = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
