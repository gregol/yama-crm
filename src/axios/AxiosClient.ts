import axios from 'axios';
import { getItem } from '../modules/core/utils/CRMPersistData'

const baseURL = 'http://localhost:3010/api';

// Define your axios instance with baseURL and headers
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Set up the JWT authentication header
const token = getItem('crm-token')
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Export the axios instance
export default axiosInstance;
