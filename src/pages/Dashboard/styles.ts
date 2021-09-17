import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const ContainerCard = styled.div`
  overflow-x: hidden;
  margin-top: -60px;
  padding-left: 50px;
  div {
    cursor: pointer;
    position: absolute;
    width: 50px;
    height: 134px;
    margin-top: 2.5px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    justify-content: center;
    overflow: hidden;
    z-index: 99;
    opacity: 0;
    transition: all ease 0.3s;
    &:hover {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 70%,
        rgba(0, 0, 0, 0)
      );
    }
    &:hover {
      opacity: 1;
    }
  }
  svg {
    font-size: 50px;
    transition: all ease 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
  ul {
    width: 999vw;
    margin-bottom: 30px;

    &:hover {
      div {
        opacity: 1;
      }
    }
  }
  h2 {
    font-size: 1.2rem;
    margin: 0 0 5px 2px;
  }
`;
