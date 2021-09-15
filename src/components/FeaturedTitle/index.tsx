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
            O brilhante cientista beberrão Rick sequestra Morty, seu neto
            aborrescente, para viver loucuras em outros mundos e dimensões
            alternativas
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
