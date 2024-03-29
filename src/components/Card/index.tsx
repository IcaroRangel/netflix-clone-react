import React from "react";
import {
  Container,
  ContainerButtons,
  ContainerImg,
  ContainerSection,
} from "./styles";
import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as Dislike } from "../../assets/dislike.svg";
import { FiCheck, FiX, FiChevronDown } from "react-icons/fi";
import Button from "../Button";

interface CardProps {
  newEpisodes?: boolean;
  title: string;
  url: string;
  duration?: string;
  genres?: string;
}

export function Card({ title, url, duration, genres, newEpisodes }: CardProps) {
  return (
    <>
      <Container>
        <ContainerImg>
          <img src={url} alt={title} />
        </ContainerImg>
        <ContainerSection>
          <ContainerButtons>
            <Button variant="primary" style={{ paddingLeft: "2px" }}>
              <Play />
            </Button>
            <Button variant="tertiary">
              <FiCheck />
            </Button>
            <Button variant="tertiary">
              <Like />
            </Button>
            <Button variant="tertiary">
              <Dislike />
            </Button>
            <Button>
              <FiX />
            </Button>
            <Button variant="tertiary" style={{ marginLeft: "18px" }}>
              <FiChevronDown />
            </Button>
            <div>
              <span>{duration}</span>
              <div>
                <p>Genêros: {genres}</p>
              </div>
            </div>
          </ContainerButtons>
        </ContainerSection>
      </Container>
    </>
  );
}
