'use client';

import { createContext, useState, useEffect } from 'react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { getUser, signInUser } from '../services/authService';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log("Calling")
    const token = getCookie('authToken');
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }, []);

  const signIn = async (email, password) => {
    const response = await signInUser(email, password);
    const { authorization } = response.headers
    setCookie('authToken', authorization, { 
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), 
      sameSite: 'strict' 
    });
    setCurrentUser(response.data)
    return response
  };

  const signOut = () => {
    deleteCookie('authToken');
    setCurrentUser(null);
  };

  const isAuthorized = (role) => {
    return currentUser && currentUser.role === role;
  };

  const isSignIn = () => {
    return getCookie('authToken') != ''
  }

  return (
    <AuthContext.Provider value={{ currentUser, signIn, signOut, isAuthorized, isSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
