export interface AccountDetails {
  id: string;
  name: string;
  username: string;
}
export interface AuthState {
  sessionId: string | null;
  expiresAt: string | null;
  guestSessionId: string | null;
  accountId: string | null;
}
export interface GuestSessionResponse {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export interface AuthenticateUserResponse {
  success: boolean;
  request_token: string;
  expires_at: string;
}
export interface ValidateWithLoginRequest {
  username: string;
  password: string;
  request_token: string;
}
export interface ValidateWithLoginResponse {
  success: boolean;
  request_token: string;
  expires_at: string;
}

export interface CreateSessionRequest {
  request_token: string;
}
export interface SessionResponse {
  success: boolean;
  session_id: string;
  expires_at: string;
}
