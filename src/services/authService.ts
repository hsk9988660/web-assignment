import { AxiosRequestConfig } from 'axios';


 const authService = {
  register: (name: string, email: string, password: string): AxiosRequestConfig => ({
        method: 'POST',
        url: '/auth/register',
        data: { name, email, password },
      }),
  login: (email: string, password: string): AxiosRequestConfig => {
    return {
      method: 'POST',
      url: '/auth/login',
      data: {
        email,
        password,
      },
    };
  },
};
export default  authService