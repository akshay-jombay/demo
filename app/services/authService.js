import axios from 'axios';

const API_URL = process.env['NEXT_PUBLIC_API_BASE_URL']

export const signInUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/sign_in`, { 
      user: {email, password }
    });
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
