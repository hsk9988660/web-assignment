import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});


