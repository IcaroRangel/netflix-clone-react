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
    img {
      border-end-end-radius: 0px;
      border-end-start-radius: 0px;
    }
    section {
      opacity: 1;
    }
  }
`;

export const ContainerSection = styled.section`
  transition: opacity 0.2s;
  opacity: 0;
`;

export const ContainerButtons = styled.div`
  border-top-right-radius: 0px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
  margin-top: -6px !important;
  width: 14rem !important;
  max-height: 20vh;
  background: #191919;
  display: flex;
  align-items: flex-start !important;
  gap: 8px;
  padding: 20px 4px 0px 8px;
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
  div {
    display: flex;
    /* background: red; */
    height: 50px;
    width: 14rem;
    justify-content: flex-start;
    align-items: flex-end;
    padding-left: 8px;
    span {
      font-size: 12px;
    }
  }
`;
