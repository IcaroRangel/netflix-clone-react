import React from 'react';
import { Container, ContainerSection } from './styles';
import { ReactComponent as Play } from '../../assets/play.svg';
import { ReactComponent as Like } from '../../assets/like.svg';
import { ReactComponent as Dislike } from '../../assets/dislike.svg';
import { FiCheck, FiX, FiChevronDown } from 'react-icons/fi';
import Button from '../Button';

interface CardProps {
  newEpisodes?: boolean;
  title: string;
  url: string;
}

export function Card({ title, url }: CardProps) {
  return (
    <Container>
      <img src={url} alt={title} />
      <ContainerSection>
        <div>
          <Button variant="primary" style={{ paddingLeft: '2px' }}>
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
          <Button variant="tertiary" style={{ marginLeft: '18px' }}>
            <FiChevronDown />
          </Button>
        </div>
      </ContainerSection>
    </Container>
  );
}
