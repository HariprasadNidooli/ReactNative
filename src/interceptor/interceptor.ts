import { API_ACCESS_TOKEN, API_URL } from '../constants/apiConstants';
import { store } from '../store/store';

import axios from 'axios';

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${API_ACCESS_TOKEN}`;
  const sessionId = store.getState().auth.sessionId;
  const guestSessionId = store.getState().auth.guestSessionId;
  if (sessionId || guestSessionId) {
    const separator = config.url?.includes('?') ? '&' : '?';
    config.url = `${config.url}${separator}session_id=${
      sessionId || guestSessionId
    }`;
  }
  return config;
});

apiClient.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default apiClient;
