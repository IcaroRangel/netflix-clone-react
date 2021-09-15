import React from 'react';
import { Card } from '../../components/Card';
import FeaturedTitle from '../../components/FeaturedTitle';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, ContainerCard } from './styles';

interface TitleProps {
  newEpisodes?: boolean;
  title: string;
  url: string;
  description?: string;
}

const titleComedy: TitleProps[] = [
  {
    title: 'A escalada',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/fwn0WBQnHPaNdNNXRIHnulYlllZ.jpg',
  },
  {
    title: 'Jumanji',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_face/dBf1gwACvGGAhusT0W74Z4ZXg1b.jpg',
  },
  {
    title: 'Toc Toc',
    url: 'http://www.maitehammoud.com.br/wp-content/uploads/2020/04/capa-toc-toc-filme.jpg',
  },
  {
    title: 'Zohan',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/47pSuoDqESXPRs75qm0PEydrALW.jpg',
  },
  {
    title: 'Superbad',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wRykg7tT35kmvKDAGzLkUpGV9cs.jpg',
  },
  {
    title: 'Minha mãe é uma peça',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ebm9zDRf4HEyKRS6y7oOCH4LIAC.jpg',
  },
  {
    title: 'A Missy errada',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7HXwjwNnZQqEOeT6TQwF2hlbQDP.jpg',
  },
];

const titleSeries: TitleProps[] = [
  {
    title: 'The 100',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/3OsZ6f1aKuk3krpZybyze6IlyI3.jpg',
  },
  {
    title: 'La casa de papel',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/zGbLWPnxbRmuzlNXv1fKPaIKbmX.jpg',
  },
  {
    title: 'The good place',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/40hnPzic5wLGdH7q8RQfsMlLut1.jpg',
  },
  {
    title: 'Locke & Key',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/gd8Et21THz0CQVSL8TJ5P301tK8.jpg',
  },
  {
    title: 'Rick and Morty',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/7q555RoNOqYgrrygz5lM9R2iKYb.jpg',
  },
  {
    title: 'Brooklyn-99',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/9qprcPJ9j5LVdYqz076ON9BscEm.jpg',
  },
  {
    title: 'Cidade invisível',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lXzu1IZmzDulGeqqrknoE7c5hak.jpg',
  },
];

const titleAnimes: TitleProps[] = [
  {
    title: 'Avatar - A lenda de Aang',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/vajktxI7UJdIRjrXnodxCdCmn6Y.jpg',
  },
  {
    title: 'Fullmetal Alchemist',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dHMY95SKOvlBYXGFrCtUdcMiDgZ.jpg',
  },
  {
    title: 'Record of Ragnarok',
    url: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iq5L971DFW1SwLJdvl7OpPI1QeZ.jpg',
  },
  {
    title: 'Naruto',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/koY8N9Y8IcLlb2eJXz50X1hFUL5.jpg',
  },
  {
    title: 'Pokémon',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/xx8Gp0XH3IC2ZjbohE0zMjp45bU.jpg',
  },
  {
    title: 'Death note',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/34U7SPKpno7WIzi82AVWreNbJjL.jpg',
  },
  {
    title: 'Demon Slayer',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/unhUWXYl8DFaIsaz6U59cDGSBgj.jpg',
  },
];

const titleAction: TitleProps[] = [
  {
    title: 'Máquinas mortais',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/5x5PFz6BjYYBfndLBd0wkzsPi8h.jpg',
  },
  {
    title: 'Warcraft',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/qyonrFPc1cPulu1QUNgZjpV5QAb.jpg',
  },
  {
    title: 'Project Power',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/7lXTI4EFOtUcRDQ9GlfD1zBGkeF.jpg',
  },
  {
    title: 'League of Gods',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/aWWIE1GGBlqZiubrXZLKLvxtnwd.jpg',
  },
  {
    title: 'Jurassic World',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/9tjieFMEPnxqZ7jH6i1bFNwseKo.jpg',
  },
  {
    title: 'Baywatch',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/dIPeYhJcsdbApZdhlbWXgwWB0xb.jpg',
  },
  {
    title: 'King Kong',
    url: 'https://www.themoviedb.org/t/p/w500_and_h282_face/4QRjnMYg3PyATd96bb2kXGvE96S.jpg',
  },
];

const Dashboard = () => {
  const [titlesComedy, setTitlesComedy] = React.useState<TitleProps[]>([]);
  const [titlesSeries, setTitlesSeries] = React.useState<TitleProps[]>([]);
  const [titlesAnimes, setTitlesAnimes] = React.useState<TitleProps[]>([]);
  const [titlesAction, setTitlesAction] = React.useState<TitleProps[]>([]);
  const [blackHeader, setBlackHeader] = React.useState(false);
  React.useEffect(() => {
    setTitlesComedy(titleComedy);
    setTitlesSeries(titleSeries);
    setTitlesAnimes(titleAnimes);
    setTitlesAction(titleAction);
  }, []);

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Container>
      <Header black={blackHeader} />
      <FeaturedTitle />
      <ContainerCard>
        <ul>
          <h2>Comédia</h2>
          {titlesComedy.map((title) => (
            <Card key={title.title} url={title.url} title={title.title} />
          ))}
        </ul>
        <ul>
          <h2>Séries</h2>
          {titlesSeries.map((title) => (
            <Card key={title.title} url={title.url} title={title.title} />
          ))}
        </ul>
        <ul>
          <h2>Anime</h2>
          {titlesAnimes.map((title) => (
            <Card key={title.title} url={title.url} title={title.title} />
          ))}
        </ul>
        <ul>
          <h2>Ação</h2>
          {titlesAction.map((title) => (
            <Card key={title.title} url={title.url} title={title.title} />
          ))}
        </ul>
      </ContainerCard>
      <Footer />
    </Container>
  );
};

export default Dashboard;
