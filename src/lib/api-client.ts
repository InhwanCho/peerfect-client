// apiClient.ts
import axios from 'axios';

const DEV_URL = 'http://15.165.184.154:8008/';

const apiClient = axios.create({
  baseURL: DEV_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
