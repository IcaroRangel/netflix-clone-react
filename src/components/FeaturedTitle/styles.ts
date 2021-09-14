import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-position: center;
  background: url('https://www.themoviedb.org/t/p/original/ySik0kM1EoUIoqwz2r7ynFS2GaO.jpg');
  background-size: cover;
  div {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #141414, transparent 50%);
  }
`;
export const ContainerButtons = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const ContainerInfos = styled.div`
  margin-left: 20px;
  margin-top: -170px;

  p {
    font-weight: 500;
    width: 40vw;
    margin-bottom: 20px;
  }
`;
