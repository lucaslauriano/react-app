import axios from 'axios';

const rest = axios.create({ baseURL: 'http://localhost:3001' });

export const sort = array => rest.post('/sort', { array: array });

const api = {
  sort
};

export default api;
