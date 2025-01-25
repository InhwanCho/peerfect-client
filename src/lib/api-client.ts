import { DEV_URL } from './../config/config';

import axios from 'axios';

const apiClient = axios.create({
  baseURL: DEV_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
