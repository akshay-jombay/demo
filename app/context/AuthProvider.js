'use client';

import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
 
  useEffect(() => {
    setCurrentUser({
      name: "Akshay-sharma",
      email: "akshay@jombay.com",
      role: "admin"
    })
  }, []);

  const isSuperAdmin =  (currentUser?.role == 'super_admin')

  const isAuthorized = (roles) => {
    return (
     currentUser &&
     (roles[0] === "all" || roles.includes(currentUser.role))
    )
  };

  const values = {
    currentUser, isAuthorized, isSuperAdmin
  }
  
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;