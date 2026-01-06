export const ACTION_TYPES = {
  AUTH: {
    GUEST_SESSION: 'auth/guestSessionAction',
    AUTHENTICATE_USER: 'auth/authenticateUserAction',
    VALIDATE_WITH_LOGIN: 'auth/validateWithLoginAction',
    CREATE_SESSION: 'auth/createSessionAction',
    GET_ACCOUNT_DETAILS: 'auth/getAccountDetails',
  },
  MOVIES: {
    GET_MOVIES: 'movies/getMoviesAction',
    SEARCH_MOVIES: 'movies/searchMoviesAction',
    GET_MOVIE_DETAILS: 'movies/getMovieDetailsAction',
    GET_MOVIE_IMAGES: 'movies/getMovieImagesAction',
    GET_MOVIE_VIDEOS: 'movies/getMovieVideosAction',
    GET_SIMILAR_MOVIES: 'movies/getSimilarMoviesAction',
    GET_MOVIE_CREDITS: 'movies/getMovieCreditsAction',
    GET_PERSON_DETAILS: 'movies/getPersonDetailsAction',
    ADD_TO_WATCHLIST: 'movies/addToWatchlistAction',
    GET_WATCHLIST_MOVIES: 'movies/getWatchlistMoviesAction',
    ADD_TO_FAVORITES: 'movies/addToFavoritesAction',
    GET_FAVORITE_MOVIES: 'movies/getFavoriteMoviesAction',
    GET_PERSON_MOVIE_CREDITS: 'movies/getPersonMovieCreditsAction',
  },
};
