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
    transform: scale(1.3);
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
  margin-top: -8px !important;
  width: 14.08rem !important;
  margin-left: -0.7px;
  max-height: 20vh;
  background: #191919;
  display: flex;
  align-items: flex-start !important;
  gap: 8px;
  padding: 20px 4px 0px 8px;
  cursor: auto !important;
  button {
    z-index: 101;
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
    width: 14rem !important;
    display: flex !important;
    justify-content: flex-start !important;
    height: 80px !important;
    padding-left: 8px !important;
    cursor: auto !important;
    span {
      font-size: 10px;
    }
    p {
      margin-left: -8px;
      padding-top: 50px;
      font-size: 10px;
    }
  }
`;

export const ContainerImg = styled.section`
  display: flex;
  align-items: flex-end;
  span {
    margin: 0px 0px 8px 8px;
    position: absolute;
    border-radius: 12px;
    padding: 2px 6px 2px 6px;
    background: #cc0000;
    font-size: 12px;
  }
`;
