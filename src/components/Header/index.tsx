import React from 'react';
import { Container, ContainerButtons, ContainerSearch } from './styles';
import { ReactComponent as Logo } from '../../assets/netflix.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiSearch, FiBell } from 'react-icons/fi';
import { useTitleContext } from '../../context/TitlesContext';

const Header = ({ black, searchToggle }: any) => {
  const history = useHistory();
  const { searchInput, setSearchInput } = useTitleContext();
  const { setTitlesComedy } = useTitleContext();
  const { setTitlesSeries } = useTitleContext();
  const { setTitlesAnimes } = useTitleContext();
  const { setTitlesAction } = useTitleContext();
  const { search, setSearch } = useTitleContext();

  const { titleComedy, titleSeries, titleAnimes, titleAction } =
    useTitleContext();

  const {
    setHorizontalScrollComedy,
    setHorizontalScrollSeries,
    setHorizontalScrollAction,
    setHorizontalScrollAnimes,
  } = useTitleContext();

  const filmButton = React.useCallback(() => {
    setTitlesSeries([]);
    setTitlesAnimes([]);
    setTitlesAction(titleAction);
    setTitlesComedy(titleComedy);
  }, []); //eslint-disable-line

  const seriesButton = React.useCallback(() => {
    setTitlesAction([]);
    setTitlesComedy([]);
    setTitlesSeries(titleSeries);
    setTitlesAnimes(titleAnimes);
  }, []); //eslint-disable-line

  const comebackButton = React.useCallback(() => {
    history.push('/');
  }, [history]);

  const allTitles = React.useCallback(() => {
    setTitlesComedy(titleComedy);
    setTitlesSeries(titleSeries);
    setTitlesAnimes(titleAnimes);
    setTitlesAction(titleAction);
  }, []); //eslint-disable-line

  const handleSearchInput = React.useCallback(() => {
    setSearchInput(!searchInput);
  }, [setSearchInput, searchInput]);

  const horizontalScroll = 0;
  let x = horizontalScroll + Math.round(window.innerWidth / 2);
  if (x > 0) {
    x = 0;
  }

  const handleChange = React.useCallback(
    (event: any) => {
      setSearch(event.target.value);
      setHorizontalScrollAction(x);
      setHorizontalScrollComedy(x);
      setHorizontalScrollSeries(x);
      setHorizontalScrollAnimes(x);
    },
    [setSearch], //eslint-disable-line
  );

  return (
    <Container className={black ? 'black' : ''}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ContainerButtons>
        <button onClick={comebackButton}>Início</button>
        <button onClick={seriesButton}>Séries</button>
        <button onClick={filmButton}>Filmes</button>
        <button onClick={allTitles}>Todos os títulos</button>
      </ContainerButtons>
      <ContainerSearch>
        <div>
          <FiSearch onClick={handleSearchInput} />
          <input
            className={searchToggle ? 'toggle' : ''}
            type="text"
            placeholder="Títulos"
            value={search}
            onChange={handleChange}
          />
        </div>
        <span>Infantil</span>
        <FiBell style={{ fill: '#fff' }} />
      </ContainerSearch>
      <div>
        <Link to="/">
          <img
            src="https://occ-0-4376-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV8kcIgIUspmvTvH9o9cHGdZUPq_sWXpcV_bYss6oqxh313dgot5KMGnQGNKOkeEGZ9sxZHAcYDJtD_Kx6je2XPEKy35.png?r=06d"
            alt="user"
          />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
