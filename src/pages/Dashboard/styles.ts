import styled from "styled-components";

export const Container = styled.div``;

export const ContainerCard = styled.div`
  overflow-x: hidden;
  margin-top: -60px;
  padding-left: 50px;
  height: 105vh;
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
      opacity: 1;
    }
    @media (max-width: 760px) {
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
    transition: all ease 0.8s;
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

export const ContainerLoading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
