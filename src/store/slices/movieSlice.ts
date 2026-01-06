import { createSlice } from '@reduxjs/toolkit';
import {
  getMoviesAction,
  searchMoviesAction,
  addToWatchlistAction,
  getWatchlistMoviesAction,
  addToFavoritesAction,
  getFavoriteMoviesAction,
} from '../actions/moviesActions';
import { Movie, MovieState } from '../../types/movieTypes';
import { SLICE_NAMES } from '../../constants/constants';

const initialState: MovieState = {
  loading: false,
  page: 1,
  movies: [],
  searchResults: [],
  total_pages: 0,
  total_results: 0,
  watchlist: [],
  favorites: [],
};
const movieSlice = createSlice({
  name: SLICE_NAMES.MOVIES,
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    optimisticAddToFavoritesList: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    optimisticRemoveFromFavoritesList: (state, action) => {
      state.favorites = state.favorites.filter(
        (id: number) => id !== action.payload,
      );
    },
    optimisticAddToWatchlistList: (state, action) => {
      state.watchlist = [...state.watchlist, action.payload];
    },
    optimisticRemoveFromWatchlistList: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (id: number) => id !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(getMoviesAction.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.loading = false;
    });
    builder.addCase(getMoviesAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getMoviesAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(searchMoviesAction.fulfilled, (state, action) => {
      state.searchResults = action.payload.results;
      state.loading = false;
    });
    builder.addCase(searchMoviesAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(searchMoviesAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(addToWatchlistAction.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addToWatchlistAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(addToWatchlistAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getWatchlistMoviesAction.fulfilled, (state, action) => {
      state.watchlist = action.payload.results.map((movie: Movie) => movie.id);
      state.loading = false;
    });
    builder.addCase(getWatchlistMoviesAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getWatchlistMoviesAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(addToFavoritesAction.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addToFavoritesAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(addToFavoritesAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getFavoriteMoviesAction.fulfilled, (state, action) => {
      state.favorites = action.payload.results.map((movie: Movie) => movie.id);
      state.loading = false;
    });
    builder.addCase(getFavoriteMoviesAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getFavoriteMoviesAction.rejected, state => {
      state.loading = false;
    });
  },
});
export const {
  setMovies,
  setSearchResults,
  optimisticAddToFavoritesList,
  optimisticRemoveFromFavoritesList,
  optimisticAddToWatchlistList,
  optimisticRemoveFromWatchlistList,
} = movieSlice.actions;
export default movieSlice.reducer;
