import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import movieReducer from './slices/movieSlice';
import movieDetailReducer from './slices/movieDetailSlice';
import castDetailReducer from './slices/castDetailSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
  movieDetail: movieDetailReducer,
  castDetail: castDetailReducer,
});

export default rootReducer;
