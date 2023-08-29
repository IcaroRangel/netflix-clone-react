import React from "react";
import { Card } from "../../components/Card";
import FeaturedTitle from "../../components/FeaturedTitle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, ContainerCard, ContainerLoading } from "./styles";
import { useTitleContext } from "../../context/TitlesContext";

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

  const [loading, setLoading] = React.useState(true);
  const [blackHeader, setBlackHeader] = React.useState(false);
  const { searchInput } = useTitleContext();
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
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const horizontalScroll = 0;
  let x = horizontalScroll + Math.round(window.innerWidth / 2);
  if (x > 0) {
    x = 0;
  }
  let n = horizontalScroll - Math.round(window.innerWidth / 2) + 165;
  if (n > 0) {
    n = 0;
  }

  return (
    <Container>
      <Header black={blackHeader} searchToggle={searchInput} />
      <FeaturedTitle />
      <ContainerCard>
        {titlesComedy.length > 1 && (
          <ul
            style={{
              width: titlesComedy.length * 280,
            }}
          >
            {titleComedyFilter.length > 0 && <h2>Comédia</h2>}

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
              width: titleSeries.length * 280,
            }}
          >
            {titleSeriesFilter.length > 0 && <h2>Séries</h2>}

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
              width: titleAnimes.length * 280,
            }}
          >
            {titleAnimesFilter.length > 0 && <h2>Animes</h2>}

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
              width: titlesAction.length * 280,
            }}
          >
            {titleActionFilter.length > 0 && <h2>Ação</h2>}

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
