import React, { createContext, useState } from 'react';

// Criação do contexto
export const UserContext = createContext();

// Provedor para envolver a aplicação
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
