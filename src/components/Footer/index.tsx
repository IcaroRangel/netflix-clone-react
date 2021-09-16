import React from 'react';
import { Container, ContainerInfos, ContainerSvgs } from './styles';
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';
import { ReactComponent as InstagramLogo } from '../../assets/instagram.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/youtube.svg';
import Button from '../Button';
const Footer = () => {
  return (
    <Container>
      <ContainerSvgs>
        <FacebookLogo />
        <InstagramLogo />
        <TwitterLogo />
        <YoutubeLogo />
      </ContainerSvgs>
      <ContainerInfos>
        <li>Idioma e legendas</li>
        <li>Audiodescrição</li>
        <li>Centro de ajuda</li>
        <li>Cartão pré-pago</li>
        <li>Imprensa</li>
        <li>Relações com investidores</li>
        <li>Carreiras</li>
        <li>Termos de uso</li>
        <li>Privacidade</li>
        <li>Avisos Legais</li>
        <li>Preferencias de cookies</li>
        <li>Informações corporativas</li>
        <li>Entre em contato</li>
        <Button>Código do serviço</Button>
        <span>© 1997-2021 Netflix, Inc.</span>
      </ContainerInfos>
    </Container>
  );
};

export default Footer;
