import React from 'react';
import { useTitleContext } from '../../context/TitlesContext';
import { Container } from './styles';

interface CardProps {
  newEpisodes?: boolean;
  title: string;
  url: string;
  onClick?: () => void;
}

export function Card({ title, url }: CardProps) {
  const { modal } = useTitleContext();
  return (
    <Container>
      <img src={url} alt={title} />
      {modal && <p>DSHAHSA</p>}
    </Container>
  );
}
