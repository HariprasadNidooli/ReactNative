import { API_URL } from '../constants/apiConstants';

export const getMovies = (type: string) => `${API_URL}/movie/${type}`;
export const createGuestSession = `${API_URL}/authentication/guest_session/new`;
export const authenticateUser = `${API_URL}/authentication/token/new`;
export const searchMovies = (query: string) =>
  `${API_URL}/search/movie?query=${query}`;
export const getMovieDetails = (movieId: string) =>
  `${API_URL}/movie/${movieId}`;
export const getSimilarMovies = (movieId: string) =>
  `${API_URL}/movie/${movieId}/similar`;
export const getMovieImages = (movieId: string) =>
  `${API_URL}/movie/${movieId}/images`;
export const getMovieVideos = (movieId: string) =>
  `${API_URL}/movie/${movieId}/videos`;
export const getMovieCredits = (movieId: string) =>
  `${API_URL}/movie/${movieId}/credits`;
export const getPersonDetails = (castId: string) =>
  `${API_URL}/person/${castId}`;
export const getPersonMovieCredits = (personId: string) =>
  `${API_URL}/person/${personId}/movie_credits`;
export const createSession = `${API_URL}/authentication/session/new`;
export const validateWithLogin = `${API_URL}/authentication/token/validate_with_login`;

export const getAccountDetails = `${API_URL}/account`;
export const addToWatchlist = (accountId: string) =>
  `${API_URL}/account/${accountId}/watchlist`;
export const getWatchlistMovies = (accountId: string) =>
  `${API_URL}/account/${accountId}/watchlist/movies`;
export const addToFavorites = (accountId: string) =>
  `${API_URL}/account/${accountId}/favorite`;
export const getFavoriteMovies = (accountId: string) =>
  `${API_URL}/account/${accountId}/favorite/movies`;
