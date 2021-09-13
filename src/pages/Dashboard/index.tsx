import React from 'react';
import { Card } from '../../components/Card';
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
    url: 'https://blogdescalada.com/wp-content/uploads/2018/01/a-escalada-cartaz.jpg',
  },
  {
    title: 'Jumanji',
    url: 'https://s2.glbimg.com/VggVzaA458OwU5PenKldQBcbQq8=/362x536/https://s2.glbimg.com/psIrbpT4DKb1VY-1CyeBiUCdxD0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/D/c/E9m9pfQde2vP7ebtzE3g/2021-1903-jumanji-bem-vindo-selva-poster.jpg',
  },
  {
    title: 'Toc Toc',
    url: 'http://www.maitehammoud.com.br/wp-content/uploads/2020/04/capa-toc-toc-filme.jpg',
  },
  {
    title: 'Zohan',
    url: 'https://assetsgn.nowonline.com.br/assets/p172787_v_v8_ac.jpg',
  },
  {
    title: 'Superbad',
    url: 'https://img.betaseries.com/R2kBWfGjtmhL5jnHL-9LuTxlFUo=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffilms%2Faffiches%2Foriginal%2F3946.jpg',
  },
  {
    title: 'Minha mãe é uma peça',
    url: 'https://upload.wikimedia.org/wikipedia/pt/d/da/Minha_Mãe_é_uma_Peça.jpg',
  },
  {
    title: 'A Missy errada',
    url: 'https://1.bp.blogspot.com/-hv-kLWV03F0/Xui8GmCG0LI/AAAAAAAAIPg/O-FpvDroxPsHr6HiJKb_ZG0kpUd7JUWLgCLcBGAsYHQ/s1600/A%2BMissy%2BErrada.jpg',
  },
];

const titleSeries: TitleProps[] = [
  {
    title: 'The 100',
    url: 'https://4.bp.blogspot.com/-s_HOcUE-oW0/V5zrUtbfg2I/AAAAAAAAuzs/64GzakQmI5oRgORtHEYGar6MIBT7-EplQCLcB/s1600/The_100160729_141809.jpg',
  },
  {
    title: 'La casa de papel',
    url: 'https://img.quizur.com/f/img5fb81cf5a81558.08136686.jpg?lastEdited=1605901590',
  },
  {
    title: 'The good place',
    url: 'https://cdn.fstatic.com/media/movies/covers/2018/05/IMG_0861.PNG',
  },
  {
    title: 'Locke & Key',
    url: 'https://multversogeek.com.br/wp-content/uploads/2020/02/locke-and-key-logo-netflix.jpg',
  },
  {
    title: 'Rick and Morty',
    url: 'https://ae01.alicdn.com/kf/HTB1eUeOSpXXXXaEXVXXq6xXFXXXt/Frete-gr-tis-24x31-polegadas-Rick-E-Morty-Poster-HD-Decora-o-HOME-DA-PAREDE-Personalizado.jpg_Q90.jpg_.webp',
  },
  {
    title: 'Brooklyn-99',
    url: 'https://i1.wp.com/www.arrobanerd.com.br/wp-content/uploads/2021/07/data-de-estreia-última-temporada-brooklyn-99-.jpg?fit=800%2C450&ssl=1',
  },
  {
    title: 'Cidade invisível',
    url: 'https://zeronaldo.com.br/wp-content/uploads/2021/01/ErI0YH_XAAMaxoL-e1610059619262.jpg',
  },
];

const titleAnimes: TitleProps[] = [
  {
    title: 'Avatar - A lenda de Aang',
    url: 'https://animesonline.vip/wp-content/uploads/2018/04/Avatar-The-Last-Airbender-Wallpaper-winx-club-vs-avatar-the-last-airbender-33571337-1280-1024.jpg',
  },
  {
    title: 'Fullmetal Alchemist',
    url: 'https://occ-0-999-1001.1.nflxso.net/art/de1f7/afd3f68aabfec48a380dc71fdd2f3f5d2b6de1f7.jpg',
  },
  {
    title: 'Record of Ragnarok',
    url: 'https://larepublica.pe/resizer/bFBk8pP_q2LfjWZ405SU1MtHZ0Q=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/KIL2R4YZRZG2FNLM77O7AIEWUM.jpg',
  },
  {
    title: 'Naruto',
    url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vauCEnR7CiyBDzRCeElKkCaXIYu.jpg',
  },
  {
    title: 'Pokémon',
    url: 'https://img-opt.cdn.smartvod.com/smartvod/images/videoland/data/images/a/n/5a20203e11f56_355x530.jpg',
  },
  {
    title: 'Death note',
    url: 'https://nihongoautodidata.com.br/wp-content/uploads/2021/06/DEATH_NOTE_anime-cover.jpg',
  },
  {
    title: 'Demon Slayer',
    url: 'https://store-images.s-microsoft.com/image/apps.44656.14398749872176704.f59f9492-0750-4d03-9a2d-acee18167bb9.eca84cda-914d-4c55-ae58-a5381f94c66f',
  },
];

const titleAction: TitleProps[] = [
  {
    title: 'Maquinás mortais',
    url: 'https://m.media-amazon.com/images/I/514SVHqi9fL.jpg',
  },
  {
    title: 'Warcraft',
    url: 'https://http2.mlstatic.com/D_NQ_NP_995196-MLB27855455694_072018-O.jpg',
  },
  {
    title: 'Project Power',
    url: 'https://pbs.twimg.com/media/Ec7nwURX0AEf7xC.jpg',
  },
  {
    title: 'League of Gods',
    url: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/DP_3502744_TC_1400x2100_DP_3502745_LeagueOfGods_Cover_2000x3000_US_0.png?itok=9XLQHMam',
  },
  {
    title: 'Jurassic World',
    url: 'https://cdn1.epicgames.com/047392e91d5e4cfdb19e2767440ab206/offer/EGS_JurassicWorldEvolution_FrontierDevelopments_S1-2560x1440-65771d1c16c9c78bfd4764bf0ad54d9a.jpg',
  },
  {
    title: 'Baywatch',
    url: 'https://m.media-amazon.com/images/I/A13tucXoWlL._AC_SL1500_.jpg',
  },
  {
    title: 'King Kong',
    url: 'https://www.dafont.com/forum/attach/orig/1/1/114653.jpg',
  },
];

const Dashboard = () => {
  const [titlesComedy, setTitlesComedy] = React.useState<TitleProps[]>([]);
  const [titlesSeries, setTitlesSeries] = React.useState<TitleProps[]>([]);
  const [titlesAnimes, setTitlesAnimes] = React.useState<TitleProps[]>([]);
  const [titlesAction, setTitlesAction] = React.useState<TitleProps[]>([]);

  React.useEffect(() => {
    setTitlesComedy(titleComedy);
    setTitlesSeries(titleSeries);
    setTitlesAnimes(titleAnimes);
    setTitlesAction(titleAction);
  }, []);

  return (
    <Container>
      <ContainerCard>
        <ul>
          <span>Comédia</span>
          {titlesComedy.map((title) => (
            <Card key={title.title} url={title.url} title={title.title} />
          ))}
        </ul>
        <ul>
          <span>Séries</span>
          {titlesSeries.map((title) => (
            <Card key={title.title} url={title.url} title={title.title} />
          ))}
        </ul>
        <ul>
          <span>Anime</span>
          {titlesAnimes.map((title) => (
            <Card key={title.title} url={title.url} title={title.title} />
          ))}
        </ul>
        <ul>
          <span>Ação</span>
          {titlesAction.map((title) => (
            <Card key={title.title} url={title.url} title={title.title} />
          ))}
        </ul>
      </ContainerCard>
    </Container>
  );
};

export default Dashboard;
