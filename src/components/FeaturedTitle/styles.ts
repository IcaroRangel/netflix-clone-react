import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-position: center;
  background: url('https://www.themoviedb.org/t/p/original/av1cS91qTZA4SvdrECnB6G3FjKc.jpg');
  background-size: cover;
  div {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #141414 10%, transparent 60%);
  }
`;
export const ContainerButtons = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: transparent;
`;

export const ContainerInfos = styled.div`
  margin-left: 52px;
  margin-top: -300px;

  p {
    font-weight: 500;
    max-width: 40%;
    margin-bottom: 20px;
  }
`;
