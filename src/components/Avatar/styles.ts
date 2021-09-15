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
    width: 8rem;
    height: 8rem;
    border-radius: 6px;
    margin-bottom: 4px;
    border: solid transparent 3px;
    transition: border 0.3s;
  }
  span {
    color: #808080;
    font-size: 1rem;
  }
`;
