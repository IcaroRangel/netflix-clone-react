import React, { createContext, ReactNode, useContext } from 'react';

interface TitleProps {
  newEpisodes?: boolean;
  title: string;
  url: string;
  description?: string;
}
interface TitleContextData {
  titlesComedy: TitleProps[];
  setTitlesComedy: (titleComedy: any) => void;
  titlesSeries: TitleProps[];
  setTitlesSeries: (titleSeries: any) => void;
  titlesAnimes: TitleProps[];
  setTitlesAnimes: (titleAnimes: any) => void;
  titlesAction: TitleProps[];
  setTitlesAction: (titleAction: any) => void;
}

interface TitleProviderProps {
  children: ReactNode;
}

const titleContext = createContext({} as TitleContextData);
export const TitleProvider = ({ children }: TitleProviderProps) => {
  const [titlesComedy, setTitlesComedy] = React.useState<TitleProps[]>([]);
  const [titlesSeries, setTitlesSeries] = React.useState<TitleProps[]>([]);
  const [titlesAnimes, setTitlesAnimes] = React.useState<TitleProps[]>([]);
  const [titlesAction, setTitlesAction] = React.useState<TitleProps[]>([]);
  return (
    <titleContext.Provider
      value={{
        titlesComedy,
        setTitlesComedy,
        titlesSeries,
        setTitlesSeries,
        titlesAnimes,
        setTitlesAnimes,
        titlesAction,
        setTitlesAction,
      }}
    >
      {children}
    </titleContext.Provider>
  );
};

export const useTitleContext = () => {
  const context = useContext(titleContext);

  return context;
};
