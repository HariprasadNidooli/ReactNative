import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../interceptor/interceptor';
import {
  authenticateUser,
  createGuestSession,
  createSession,
  getAccountDetails,
  validateWithLogin,
} from '../../endpoints/endPoints';
import {
  AuthenticateUserResponse,
  GuestSessionResponse,
  SessionResponse,
  ValidateWithLoginRequest,
  ValidateWithLoginResponse,
  AccountDetails,
} from '../../types/authType';
import { ACTION_TYPES } from '../../types/actionTypes';

export const guestSessionAction = createAsyncThunk<GuestSessionResponse>(
  ACTION_TYPES.AUTH.GUEST_SESSION,
  () => {
    return apiClient.get(createGuestSession);
  },
);

export const authenticateUserAction =
  createAsyncThunk<AuthenticateUserResponse>(
    ACTION_TYPES.AUTH.AUTHENTICATE_USER,
    () => {
      return apiClient.get(authenticateUser);
    },
  );

export const validateWithLoginAction = createAsyncThunk<
  ValidateWithLoginResponse,
  ValidateWithLoginRequest
>(ACTION_TYPES.AUTH.VALIDATE_WITH_LOGIN, credentials => {
  return apiClient.post(validateWithLogin, credentials);
});
export const createSessionAction = createAsyncThunk<SessionResponse, string>(
  ACTION_TYPES.AUTH.CREATE_SESSION,
  (requestToken: string) => {
    return apiClient.post(createSession, {
      request_token: requestToken,
    });
  },
);

export const getAccountDetailsAction = createAsyncThunk<AccountDetails>(
  ACTION_TYPES.AUTH.GET_ACCOUNT_DETAILS,
  () => {
    return apiClient.get(getAccountDetails);
  },
);
