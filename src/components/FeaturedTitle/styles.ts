import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-position: center;
  background: url("https://image.tmdb.org/t/p/original/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg");
  background-size: cover;
  div {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #141414 10%, transparent 60%);
  }
  @media (max-width: 760px) {
    height: 90vh;
  }
`;
export const ContainerButtons = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: transparent;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const ContainerInfos = styled.div`
  margin-left: 52px;
  margin-top: -300px;
  p {
    font-weight: 500;
    max-width: 40%;
    margin-bottom: 20px;
  }
  @media (max-width: 760px) {
    p {
      font-size: 14px;
      max-width: 100%;
      margin-right: 30px;
    }
  }
`;
