import React from "react";
import Button from "../Button";
import { FiInfo } from "react-icons/fi";
import { Container, ContainerButtons, ContainerInfos } from "./styles";
import { ReactComponent as Play } from "../../assets/play.svg";
const FeaturedTitle = () => {
  return (
    <>
      <Container>
        <div></div>
        <ContainerInfos>
          <p>
            John Wick está em maus lençóis. Existe uma recompensa de 14 milhões
            de dólares pela sua captura, por alegadamente ter assassinado um
            membro da Alta Cúpula. Sozinho e em fuga, Wick luta por todos os
            meios para escapar da cidade de Nova Iorque.
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
