import axios from 'axios';

const rest = axios.create({ baseURL: 'http://localhost:3000' });

export const sort = () => rest.get('/sort');

const api = {
  sort
};

export default api;
