import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 70px 0 34px;
  transition: all ease 0.5s;
  &.black {
    background: #141414;
  }
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 40%,
    rgba(0, 0, 0, 0)
  );
  svg {
    height: 3vw;
    width: 8rem;
  }
  img {
    height: 6vh;
    border-radius: 4px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 400vw;
  justify-content: flex-start;
  gap: 16px;
  padding-left: 20px;
  button {
    font-size: 14px;
    background: transparent;
    color: #fff;
    border: 0;
    transition: all ease 0.3s;
    &:hover {
      color: ${shade(0.2, '#fff')};
    }
    &:focus {
      font-weight: bold;
    }
  }
`;
