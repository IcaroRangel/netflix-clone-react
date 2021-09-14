import React from 'react';
import Button from '../Button';
import { FiInfo } from 'react-icons/fi';
import { Container, ContainerButtons, ContainerInfos } from './styles';
import { ReactComponent as Play } from '../../assets/play.svg';
const FeaturedTitle = () => {
  return (
    <>
      <Container>
        <div></div>
        <ContainerInfos>
          <p>
            Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu
            líder manipula a polícia para realizar um plano. Será o maior roubo
            da história, ou uma missão em vão?
          </p>
          <ContainerButtons>
            <Button variant="primary">
              <Play />
              <span>Assistir</span>
            </Button>
            <Button variant="secondary">
              <FiInfo />
              <span>Mais Informações</span>
            </Button>
          </ContainerButtons>
        </ContainerInfos>
      </Container>
    </>
  );
};

export default FeaturedTitle;
