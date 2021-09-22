import React from 'react';
import { Card } from '../../components/Card';
import FeaturedTitle from '../../components/FeaturedTitle';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, ContainerCard, ContainerLoading } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTitleContext } from '../../context/TitlesContext';

const Dashboard = () => {
  const { titlesComedy, setTitlesComedy, titleComedyFilter } =
    useTitleContext();
  const { titlesSeries, setTitlesSeries, titleSeriesFilter } =
    useTitleContext();
  const { titlesAnimes, setTitlesAnimes, titleAnimesFilter } =
    useTitleContext();
  const { titlesAction, setTitlesAction, titleActionFilter } =
    useTitleContext();
  const { titleComedy, titleSeries, titleAnimes, titleAction } =
    useTitleContext();

  const [horizontalScrollComedy, setHorizontalScrollComedy] = React.useState(0);
  const [horizontalScrollSeries, setHorizontalScrollSeries] = React.useState(0);
  const [horizontalScrollAnimes, setHorizontalScrollAnimes] = React.useState(0);
  const [horizontalScrollAction, setHorizontalScrollAction] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [blackHeader, setBlackHeader] = React.useState(false);

  React.useEffect(() => {
    setTitlesComedy(titleComedy);
    setTitlesSeries(titleSeries);
    setTitlesAnimes(titleAnimes);
    setTitlesAction(titleAction);
    setLoading(false);
  }, []); //eslint-disable-line

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

  const horizontalScroll = 0;
  let x = horizontalScroll + Math.round(window.innerWidth / 2);
  if (x > 0) {
    x = 0;
  }
  let n = horizontalScroll - Math.round(window.innerWidth / 2) + 135;
  if (n > 0) {
    n = 0;
  }
  const handleLeftArrowComedy = React.useCallback(() => {
    setHorizontalScrollComedy(x);
  }, []); // eslint-disable-line

  const handleRightArrowComedy = React.useCallback(() => {
    setHorizontalScrollComedy(n);
  }, []); // eslint-disable-line

  const handleLeftArrowSeries = React.useCallback(() => {
    setHorizontalScrollSeries(x);
  }, []); // eslint-disable-line

  const handleRightArrowSeries = React.useCallback(() => {
    setHorizontalScrollSeries(n);
  }, []); // eslint-disable-line

  const handleLeftArrowAnimes = React.useCallback(() => {
    setHorizontalScrollAnimes(x);
  }, []); // eslint-disable-line

  const handleRightArrowAnimes = React.useCallback(() => {
    setHorizontalScrollAnimes(n);
  }, []); // eslint-disable-line

  const handleLeftArrowAction = React.useCallback(() => {
    setHorizontalScrollAction(x);
  }, []); // eslint-disable-line

  const handleRightArrowAction = React.useCallback(() => {
    setHorizontalScrollAction(n);
  }, []); // eslint-disable-line

  return (
    <Container>
      <Header black={blackHeader} />
      <FeaturedTitle />
      <ContainerCard>
        {titlesComedy.length > 1 && (
          <ul
            style={{
              marginLeft: horizontalScrollComedy,
              width: titlesComedy.length * 280,
            }}
          >
            {titleComedyFilter.length > 0 && <h2>Comédia</h2>}
            {titleComedyFilter.length > 5 && (
              <>
                <div style={{ left: 0 }} onClick={handleLeftArrowComedy}>
                  <FiChevronLeft />
                </div>
                <div style={{ right: 0 }} onClick={handleRightArrowComedy}>
                  <FiChevronRight />
                </div>
              </>
            )}
            {titleComedyFilter.map((title, key) => (
              <>
                <Card
                  key={title.title}
                  url={title.url}
                  title={title.title}
                  duration={title.duration}
                  genres={title.genres}
                  newEpisodes={title.newEpisodes}
                />
              </>
            ))}
          </ul>
        )}
        {titlesSeries.length > 1 && (
          <ul
            style={{
              marginLeft: horizontalScrollSeries,
              width: titleSeries.length * 280,
            }}
          >
            {titleSeriesFilter.length > 0 && <h2>Séries</h2>}
            {titleSeriesFilter.length > 5 && (
              <>
                <div style={{ left: 0 }} onClick={handleLeftArrowSeries}>
                  <FiChevronLeft />
                </div>
                <div style={{ right: 0 }} onClick={handleRightArrowSeries}>
                  <FiChevronRight />
                </div>
              </>
            )}

            {titleSeriesFilter.map((title, key) => (
              <Card
                key={title.title}
                url={title.url}
                title={title.title}
                duration={title.duration}
                genres={title.genres}
                newEpisodes={title.newEpisodes}
              />
            ))}
          </ul>
        )}
        {titlesAnimes.length > 1 && (
          <ul
            style={{
              marginLeft: horizontalScrollAnimes,
              width: titleAnimes.length * 280,
            }}
          >
            {titleAnimesFilter.length > 0 && <h2>Animes</h2>}
            {titleAnimesFilter.length > 5 && (
              <>
                <div style={{ left: 0 }} onClick={handleLeftArrowAnimes}>
                  <FiChevronLeft />
                </div>
                <div style={{ right: 0 }} onClick={handleRightArrowAnimes}>
                  <FiChevronRight />
                </div>
              </>
            )}

            {titleAnimesFilter.map((title) => (
              <Card
                key={title.title}
                url={title.url}
                title={title.title}
                duration={title.duration}
                genres={title.genres}
                newEpisodes={title.newEpisodes}
              />
            ))}
          </ul>
        )}
        {titlesAction.length > 1 && (
          <ul
            style={{
              marginLeft: horizontalScrollAction,
              width: titlesAction.length * 280,
            }}
          >
            {titleActionFilter.length > 0 && <h2>Ação</h2>}
            {titleActionFilter.length > 5 && (
              <>
                <div style={{ left: 0 }} onClick={handleLeftArrowAction}>
                  <FiChevronLeft />
                </div>
                <div style={{ right: 0 }} onClick={handleRightArrowAction}>
                  <FiChevronRight />
                </div>
              </>
            )}

            {titleActionFilter.map((title, key) => (
              <Card
                key={title.title}
                url={title.url}
                title={title.title}
                duration={title.duration}
                genres={title.genres}
                newEpisodes={title.newEpisodes}
              />
            ))}
          </ul>
        )}
      </ContainerCard>
      <Footer />
      {loading && (
        <ContainerLoading>
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Carregando"
          />
        </ContainerLoading>
      )}
    </Container>
  );
};

export default Dashboard;
