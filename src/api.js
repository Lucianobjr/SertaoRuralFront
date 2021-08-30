import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  //baseURL: 'http://localhost:3001'
});

export const TOKEN_KEY = 'SertaoRural';
export const ADMIN = 'administrador';
export const ID = "identificador";