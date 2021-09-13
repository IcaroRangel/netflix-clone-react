import React from 'react';
import { Container } from './styles';

interface CardProps {
  newEpisodes?: boolean;
  title: string;
  url: string;
  description?: string;
}

export function Card({ title, url }: CardProps) {
  return (
    <Container>
      <img src={url} alt={title} />
    </Container>
  );
}
