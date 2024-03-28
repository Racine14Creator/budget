// apiContext.js
import React, { createContext, useContext } from 'react';

const ApiContext = createContext();

// Custom hook to consume the API context
export const useApiContext = () => {
  return useContext(ApiContext);
};

// API provider component
export const ApiProvider = ({ apiUrl, children }) => {
  return <ApiContext.Provider value={apiUrl}>
    {children}
  </ApiContext.Provider>;
};
