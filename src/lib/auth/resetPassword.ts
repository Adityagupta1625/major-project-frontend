import axios from 'axios';

export const resetPassword = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reset-password`, {
        email,
        password,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message ?? 'Something Went Wrong');
      });
  });
};
