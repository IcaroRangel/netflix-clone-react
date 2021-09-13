import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: inherit;
`;
export const ContainerLink = styled.div`
  display: flex;
  width: 100%;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  a {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 10%,
      rgba(0, 0, 0, 0)
    );

    display: flex;
    cursor: auto;
  }
  svg {
    margin: 16px 34px;
    z-index: 2;
    cursor: pointer;
    height: 3vw;
    width: 7rem;
    background: transparent;
  }
`;

export const ContainerH1 = styled.div`
  h1 {
    height: 30vh;
    color: #fff;
    font-weight: unset;
    font-size: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: -2rem;
  }
`;
export const ContainerProfiles = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ContainerButtons = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
