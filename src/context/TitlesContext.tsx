import React, { createContext, ReactNode, useContext } from 'react';

interface TitleProps {
  newEpisodes?: boolean;
  title: string;
  url: string;
  duration?: string;
  genres?: string;
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
  titleComedy: TitleProps[];
  titleSeries: TitleProps[];
  titleAnimes: TitleProps[];
  titleAction: TitleProps[];
  modal: boolean;
  setModal: (modal: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  titleComedyFilter: TitleProps[];
  titleSeriesFilter: TitleProps[];
  titleAnimesFilter: TitleProps[];
  titleActionFilter: TitleProps[];
}

interface TitleProviderProps {
  children: ReactNode;
}

const titleContext = createContext({} as TitleContextData);
export const TitleProvider = ({ children }: TitleProviderProps) => {
  const titleComedy: TitleProps[] = [
    {
      title: 'a escalada',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/fwn0WBQnHPaNdNNXRIHnulYlllZ.jpg',
      duration: '1h 43m',
      genres: 'Comédia, Romance, Aventura',
    },
    {
      title: 'jumanji',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_face/dBf1gwACvGGAhusT0W74Z4ZXg1b.jpg',
      duration: '1h 59m',
      genres: 'Comédia, Aventura, Ação, Fantasia',
    },
    {
      title: 'toc toc',
      url: 'http://www.maitehammoud.com.br/wp-content/uploads/2020/04/capa-toc-toc-filme.jpg',
      duration: '1h 30m',
      genres: 'Comédia',
    },
    {
      title: 'zohan',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/47pSuoDqESXPRs75qm0PEydrALW.jpg',
      duration: '1h 53m',
      genres: 'Comédia, Ação',
    },
    {
      title: 'superbad',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wRykg7tT35kmvKDAGzLkUpGV9cs.jpg',
      duration: '1h 53m',
      genres: 'Comédia',
    },
    {
      title: 'minha mãe é uma peça',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ebm9zDRf4HEyKRS6y7oOCH4LIAC.jpg',
      duration: '1h 21m',
      genres: 'Comédia',
    },
    {
      title: 'a missy errada',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7HXwjwNnZQqEOeT6TQwF2hlbQDP.jpg',
      duration: '1h 29m',
      genres: 'Comédia, Romance',
    },
  ];

  const titleSeries: TitleProps[] = [
    {
      title: 'the 100',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/3OsZ6f1aKuk3krpZybyze6IlyI3.jpg',
      duration: '7 Temporadas',
      genres: 'Ficção científica, Drama, Ação',
      newEpisodes: true,
    },
    {
      title: 'la casa de papel',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/zGbLWPnxbRmuzlNXv1fKPaIKbmX.jpg',
      duration: '5 Temporadas',
      genres: 'Crime, Drama',
      newEpisodes: true,
    },
    {
      title: 'the good place',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/40hnPzic5wLGdH7q8RQfsMlLut1.jpg',
      duration: '4 Temporadas',
      genres: 'Ficção científica, Fantasia, Comédia',
      newEpisodes: false,
    },
    {
      title: 'locke & key',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/gd8Et21THz0CQVSL8TJ5P301tK8.jpg',
      duration: '1 Temporada',
      genres: 'Ficção científica, Fantasia, Drama, Mistério',
      newEpisodes: false,
    },
    {
      title: 'rick and morty',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/7q555RoNOqYgrrygz5lM9R2iKYb.jpg',
      duration: '4 Temporadas',
      genres: 'Animação, Comédia, Fantasia',
      newEpisodes: false,
    },
    {
      title: 'brooklyn-99',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/9qprcPJ9j5LVdYqz076ON9BscEm.jpg',
      duration: '8 Temporadas',
      genres: 'Comédia, Crime',
      newEpisodes: true,
    },
    {
      title: 'cidade invisível',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lXzu1IZmzDulGeqqrknoE7c5hak.jpg',
      duration: '1 Temporadas',
      genres: 'Mistério, Drama',
      newEpisodes: false,
    },
  ];

  const titleAnimes: TitleProps[] = [
    {
      title: 'avatar - a lenda de aang',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/vajktxI7UJdIRjrXnodxCdCmn6Y.jpg',
      duration: '3 Temporadas',
      genres: 'Animação, Aventura, Fantasia',
      newEpisodes: false,
    },
    {
      title: 'fullmetal alchemist',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dHMY95SKOvlBYXGFrCtUdcMiDgZ.jpg',
      duration: '1 Temporada',
      genres: 'Ação, Animação, Ficção científica',
      newEpisodes: false,
    },
    {
      title: 'record of ragnarok',
      url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iq5L971DFW1SwLJdvl7OpPI1QeZ.jpg',
      duration: '1 Temporada',
      genres: 'Ação, Animação, Fantasia',
      newEpisodes: true,
    },
    {
      title: 'naruto',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/koY8N9Y8IcLlb2eJXz50X1hFUL5.jpg',
      duration: '9 Temporadas',
      genres: 'Animação, Aventura, Fantasia',
    },
    {
      title: 'pokémon',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/xx8Gp0XH3IC2ZjbohE0zMjp45bU.jpg',
      duration: '23 Temporadas',
      genres: 'Animação, Aventura, Fantasia',
      newEpisodes: true,
    },
    {
      title: 'death note',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/34U7SPKpno7WIzi82AVWreNbJjL.jpg',
      duration: '1 Temporada',
      genres: 'Animação, Mistério, Drama',
    },
    {
      title: 'demon Slayer',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/unhUWXYl8DFaIsaz6U59cDGSBgj.jpg',
      duration: '1 Temporada',
      genres: 'Animação, Aventura, Fantasia',
      newEpisodes: true,
    },
  ];

  const titleAction: TitleProps[] = [
    {
      title: 'máquinas mortais',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/5x5PFz6BjYYBfndLBd0wkzsPi8h.jpg',
      duration: '2h 8m',
      genres: 'Aventura, Ficção científica',
    },
    {
      title: 'warcraft',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/qyonrFPc1cPulu1QUNgZjpV5QAb.jpg',
      duration: '2h 3m',
      genres: 'Ação, Aventura, Fantasia',
    },
    {
      title: 'project power',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/7lXTI4EFOtUcRDQ9GlfD1zBGkeF.jpg',
      duration: '1h 53m',
      genres: 'Ação, Crime, Ficção científica',
    },
    {
      title: 'league of gods',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/aWWIE1GGBlqZiubrXZLKLvxtnwd.jpg',
      duration: '2h 10m',
      genres: 'Ação, Fantasia',
    },
    {
      title: 'jurassic World',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/9tjieFMEPnxqZ7jH6i1bFNwseKo.jpg',
      duration: '2h 5m',
      genres: 'Ação, Aventura, Ficção científica, Thriller',
    },
    {
      title: 'baywatch',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/dIPeYhJcsdbApZdhlbWXgwWB0xb.jpg',
      duration: '1h 56m',
      genres: 'Comédia, Ação, Crime',
    },
    {
      title: 'king kong',
      url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/4QRjnMYg3PyATd96bb2kXGvE96S.jpg',
      duration: '3h 7m',
      genres: 'Aventura, Drama, Ação',
    },
  ];

  const [titlesComedy, setTitlesComedy] = React.useState<TitleProps[]>([]);
  const [titlesSeries, setTitlesSeries] = React.useState<TitleProps[]>([]);
  const [titlesAnimes, setTitlesAnimes] = React.useState<TitleProps[]>([]);
  const [titlesAction, setTitlesAction] = React.useState<TitleProps[]>([]);
  const [modal, setModal] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const titleActionFilter = titlesAction.filter((title) =>
    title.title.includes(search),
  );
  const titleSeriesFilter = titlesSeries.filter((title) =>
    title.title.includes(search),
  );
  const titleAnimesFilter = titlesAnimes.filter((title) =>
    title.title.includes(search),
  );
  const titleComedyFilter = titlesComedy.filter((title) =>
    title.title.includes(search),
  );

  return (
    <titleContext.Provider
      value={{
        titleComedyFilter,
        titleSeriesFilter,
        titleAnimesFilter,
        titleActionFilter,
        search,
        setSearch,
        modal,
        setModal,
        titleAction,
        titleAnimes,
        titleSeries,
        titleComedy,
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
