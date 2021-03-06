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
  a {
    cursor: auto;
  }
  svg {
    cursor: pointer;
    height: 3vw;
    width: 8rem;
  }
  img {
    margin-left: 4px;
    height: 2rem;
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

export const ContainerSearch = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 0px;
    height: 28px;
    background-color: transparent;
    box-shadow: none;
    margin-left: -30px;
    margin-right: 10px;
    border-left: 0px;
    color: #fff;
    border: 2px solid transparent;
    outline: none;
    font-size: 14px;
    transition: 0.3s ease all;
    padding-left: 30px;
    &.toggle {
      width: 240px;
      border-color: #fff;
      background: #191919;
    }
  }
  span {
    padding-right: 4px;
    font-size: 14px;
    text-transform: uppercase;
    padding-top: 4px;
  }
  svg {
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 25px;
    transition: all ease 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
