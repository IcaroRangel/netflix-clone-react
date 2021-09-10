import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    img {
      border-color: #e5e5e5;
    }
    span {
      color: #fff;
    }
  }
  img {
    width: 82px;
    height: 82px;
    border-radius: 4px;
    margin-bottom: 4px;
    border: solid transparent 1px;
    transition: border 0.3s;
  }
  span {
    color: #808080;
    font-size: 12px;
  }
`;
