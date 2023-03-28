import axios from "axios";

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://essencial-data-base.herokuapp.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api;