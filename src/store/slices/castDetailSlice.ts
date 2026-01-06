import { createSlice } from '@reduxjs/toolkit';
import {
  CastDetailsResponse,
  PersonMovieCredits,
} from '../../types/movieTypes';
import {
  getPersonDetailsAction,
  getPersonMovieCreditsAction,
} from '../actions/moviesActions';

export interface CastDetailsState {
  loading: boolean;
  castDetails: CastDetailsResponse | null;
  personMovieCredits: PersonMovieCredits | null;
}
const initialState: CastDetailsState = {
  loading: false,
  castDetails: null,
  personMovieCredits: null,
};

const castDetailSlice = createSlice({
  name: 'castDetail',
  initialState,
  reducers: {
    setCastDetails: (state, action) => {
      state.castDetails = action.payload;
    },
    setPersonMovieCredits: (state, action) => {
      state.personMovieCredits = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPersonDetailsAction.fulfilled, (state, action) => {
      state.castDetails = action.payload;
      state.loading = false;
    });
    builder.addCase(getPersonDetailsAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getPersonDetailsAction.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getPersonMovieCreditsAction.fulfilled, (state, action) => {
      state.personMovieCredits = action.payload;
      state.loading = false;
    });
    builder.addCase(getPersonMovieCreditsAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(getPersonMovieCreditsAction.rejected, state => {
      state.loading = false;
    });
  },
});

export const { setCastDetails, setPersonMovieCredits } =
  castDetailSlice.actions;
export default castDetailSlice.reducer;
