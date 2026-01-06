import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../interceptor/interceptor';
import {
  getPersonDetails,
  getMovieCredits,
  getMovieDetails,
  getMovieImages,
  getMovieVideos,
  getMovies,
  getSimilarMovies,
  searchMovies,
  addToWatchlist,
  getWatchlistMovies,
  addToFavorites,
  getFavoriteMovies,
  getPersonMovieCredits,
} from '../../endpoints/endPoints';
import {
  MovieDetailsResponse,
  MovieImages,
  MovieResponse,
  MovieVideos,
  MovieCredits,
  CastDetailsResponse,
  PersonMovieCredits,
} from '../../types/movieTypes';
import { ACTION_TYPES } from '../../types/actionTypes';

export const getMoviesAction = createAsyncThunk<MovieResponse, string>(
  ACTION_TYPES.MOVIES.GET_MOVIES,
  type => {
    return apiClient.get(getMovies(type));
  },
);

export const searchMoviesAction = createAsyncThunk<MovieResponse, string>(
  ACTION_TYPES.MOVIES.SEARCH_MOVIES,
  query => {
    return apiClient.get(searchMovies(query));
  },
);

export const getMovieDetailsAction = createAsyncThunk<
  MovieDetailsResponse,
  string
>(ACTION_TYPES.MOVIES.GET_MOVIE_DETAILS, movieId => {
  return apiClient.get(getMovieDetails(movieId));
});

export const getMovieImagesAction = createAsyncThunk<MovieImages, string>(
  ACTION_TYPES.MOVIES.GET_MOVIE_IMAGES,
  movieId => {
    return apiClient.get(getMovieImages(movieId));
  },
);

export const getSimilarMoviesAction = createAsyncThunk<MovieResponse, string>(
  ACTION_TYPES.MOVIES.GET_SIMILAR_MOVIES,
  movieId => {
    return apiClient.get(getSimilarMovies(movieId));
  },
);

export const getMovieVideosAction = createAsyncThunk<MovieVideos, string>(
  ACTION_TYPES.MOVIES.GET_MOVIE_VIDEOS,
  movieId => {
    return apiClient.get(getMovieVideos(movieId));
  },
);

export const getMovieCreditsAction = createAsyncThunk<MovieCredits, string>(
  ACTION_TYPES.MOVIES.GET_MOVIE_CREDITS,
  movieId => {
    return apiClient.get(getMovieCredits(movieId));
  },
);

export const getPersonDetailsAction = createAsyncThunk<
  CastDetailsResponse,
  string
>(ACTION_TYPES.MOVIES.GET_PERSON_DETAILS, castId => {
  return apiClient.get(getPersonDetails(castId));
});

export const addToWatchlistAction = createAsyncThunk<
  void,
  { accountId: string; movieId: string; watchlist: boolean }
>(ACTION_TYPES.MOVIES.ADD_TO_WATCHLIST, ({ accountId, movieId, watchlist }) => {
  return apiClient.post(addToWatchlist(accountId), {
    media_type: 'movie',
    media_id: movieId,
    watchlist: watchlist,
  });
});

export const getWatchlistMoviesAction = createAsyncThunk<MovieResponse, string>(
  ACTION_TYPES.MOVIES.GET_WATCHLIST_MOVIES,
  accountId => {
    return apiClient.get(getWatchlistMovies(accountId));
  },
);

export const addToFavoritesAction = createAsyncThunk<
  void,
  { accountId: string; movieId: string; favorite: boolean }
>(ACTION_TYPES.MOVIES.ADD_TO_FAVORITES, ({ accountId, movieId, favorite }) => {
  return apiClient.post(addToFavorites(accountId), {
    media_type: 'movie',
    media_id: movieId,
    favorite: favorite,
  });
});

export const getFavoriteMoviesAction = createAsyncThunk<MovieResponse, string>(
  ACTION_TYPES.MOVIES.GET_FAVORITE_MOVIES,
  accountId => {
    return apiClient.get(getFavoriteMovies(accountId));
  },
);

export const getPersonMovieCreditsAction = createAsyncThunk<
  PersonMovieCredits,
  string
>(ACTION_TYPES.MOVIES.GET_PERSON_MOVIE_CREDITS, personId => {
  return apiClient.get(getPersonMovieCredits(personId));
});
