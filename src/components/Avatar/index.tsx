import React from 'react';
import { Container } from './styles';

interface AvatarProps {
  name: string;
  url: string;
}

export function Avatar({ name, url }: AvatarProps) {
  return (
    <Container>
      <img src={url} alt={'Perfil' + name} />
      <span>{name}</span>
    </Container>
  );
}
