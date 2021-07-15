/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';

const estadoGlobalInicial = {
  usuario: null,
  login: () => {},
  logout: () => {},
};

export const UsuarioLogado = createContext(estadoGlobalInicial);

export const UsuarioLogadoProvider = ({ children }) => {
  // const [user, setUser] = useState({});
  const [user, setUser] = useState(null);

  return (
    <UsuarioLogado.Provider
      value={{
        usuario: user,
        login: (newUser) => {
          setUser(newUser);
        },
        logout: () => {
          // setUser({});
          setUser(null);
        },
      }}>
      {children}
    </UsuarioLogado.Provider>
  );
};
