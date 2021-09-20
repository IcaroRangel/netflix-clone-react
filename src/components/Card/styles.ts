import styled from 'styled-components';

export const Container = styled.li`
  display: inline-block;
  margin: 0.2vw;
  width: 14rem;
  height: 8rem;
  transition: all ease 0.7s;
  img {
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
  section {
    transition: all ease 0.5s;
    opacity: 0;
  }
  &:hover {
    transform: scale(1.4);
    overflow: visible;
    cursor: pointer;
    z-index: 98;
    section {
      opacity: 1;
    }
  }
`;
