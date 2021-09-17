import { createContext, ReactNode, useContext } from 'react';

interface titleContextData {}

interface titleProviderProps {
  children: ReactNode;
}

const titleContext = createContext({} as titleContextData);

export const TitleProvider = ({ children }: titleProviderProps) => {
  return <titleContext.Provider value={{}}>{children}</titleContext.Provider>;
};

export const useTitleContext = () => {
  const context = useContext(titleContext);
  return context;
};
