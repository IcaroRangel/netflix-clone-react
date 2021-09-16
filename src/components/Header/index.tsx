import React from 'react';
import { Container, ContainerButtons } from './styles';
import { ReactComponent as Logo } from '../../assets/netflix.svg';
import { Link } from 'react-router-dom';

const Header = ({ black }: any) => {
  return (
    <Container className={black ? 'black' : ''}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ContainerButtons>
        <button>Início</button>
        <button>Séries</button>
        <button>Filmes</button>
        <button>Recomendações</button>
      </ContainerButtons>
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
