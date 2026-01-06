import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../types/authType';
import {
  createSessionAction,
  getAccountDetailsAction,
  guestSessionAction,
} from '../actions/authActions';
import { SLICE_NAMES } from '../../constants/constants';

const initialState: AuthState = {
  sessionId: null,
  expiresAt: null,
  guestSessionId: null,
  accountId: null,
};
export const authSlice = createSlice({
  name: SLICE_NAMES.AUTH,
  initialState,
  reducers: {
    logout: state => {
      state.sessionId = null;
      state.expiresAt = null;
      state.guestSessionId = null;
      state.accountId = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(guestSessionAction.fulfilled, (state, action) => {
      state.guestSessionId = action.payload.guest_session_id;
      state.expiresAt = action.payload.expires_at;
    });
    builder.addCase(createSessionAction.fulfilled, (state, action) => {
      state.sessionId = action.payload.session_id;
      state.expiresAt = action.payload.expires_at;
    });
    builder.addCase(getAccountDetailsAction.fulfilled, (state, action) => {
      state.accountId = action.payload.id;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
