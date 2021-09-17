import { createContext, ReactNode } from 'react';

interface titleContextData {}

interface titleProviderProps {
  children: ReactNode;
}

const titleContext = createContext({} as titleContextData);

export const TitleProvider = ({ children }: titleProviderProps) => {
  return <titleContext.Provider value={{}}>{children}</titleContext.Provider>;
};
