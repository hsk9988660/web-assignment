import { api } from './api';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
    email: string;
    password: string;
  }

export const authService = {
  register: async (data: RegisterData) => {
    const response = await api.post('/register', data);
    return response.data;
  },
  login: async (data: LoginData) => {
    const response = await api.post('/login', data);
    return response.data;
  },
};
