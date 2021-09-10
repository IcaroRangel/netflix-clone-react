import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerH1 = styled.div`
  h1 {
    height: 30vh;
    color: #fff;
    font-weight: unset;
    font-size: 2.6rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
  }
`;
export const ContainerProfiles = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ContainerButtons = styled.div`
  /* margin-bottom: 60px; */
  display: flex;
  gap: 16px;
`;
