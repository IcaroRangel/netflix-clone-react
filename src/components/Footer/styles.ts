import styled from 'styled-components';

export const Container = styled.footer`
  padding: 80px 120px;
`;

export const ContainerSvgs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  svg {
    fill: #909090;
    cursor: pointer;
  }
`;

export const ContainerInfos = styled.ul`
  margin-top: 10px;
  height: 25vh;
  li {
    display: inline-flex;
    text-align: left;
    width: 230px;
    list-style: none;
    padding-bottom: 16px;
    cursor: pointer;
    color: #909090;
    font-size: 13px;
  }
  button {
    margin-top: 10px;
    text-transform: none;
    padding: 6px 4px;
    font-size: 13px;
  }
  span {
    font-size: 11px;
    color: #909090;
  }
`;
