import styled from 'styled-components';

export const Container = styled.li`
  display: inline-block;
  margin: 0.2vw;
  width: 14rem;
  height: 8rem;
  transition: transform 0.5s;
  img {
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.5);
    overflow: visible;
    cursor: pointer;
    z-index: 98;
    border-radius: 0px;
    section {
      opacity: 1;
    }
  }
`;

export const ContainerSection = styled.section`
  transition: opacity 0.2s;
  opacity: 0;
  div {
    border-radius: 0;
    margin-top: -6px !important;
    width: 14rem !important;
    max-height: 10vh;
    border-end-end-radius: 6px;
    border-end-start-radius: 6px;
    background: #191919;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 0px 4px 0px 8px;
  }
  button {
    margin: 0;
    padding: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.6rem;
    width: 1.6rem;
    svg {
      width: 0.8rem;
      height: 0.8rem;
      &:hover {
        transform: none;
      }
    }
  }
`;
