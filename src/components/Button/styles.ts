import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
// import { shade } from 'polished';
interface ContainerProps extends Pick<ButtonProps, 'variant'> {}

export const Container = styled.button<ContainerProps>`
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.3s;
  ${(props) => buttonModifiers[props.variant || 'default']}
  span {
    background-color: transparent;
    font-size: 1rem;
  }
  svg {
    background: transparent;
  }
`;

const buttonModifiers = {
  default: css`
    font-size: 1.2vw;
    display: block;
    margin: 2em 0 1em 0;
    color: grey;
    text-transform: uppercase;
    padding: 0.5em 1.5em;
    letter-spacing: 2px;
    border: 1px solid grey;
    background-color: transparent;
    &:hover {
      color: #fff;
      border-color: #fff;
    }
  `,
  primary: css`
    font-size: 1.6rem;
    width: 100%;
    font-weight: bold;
    padding: 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    color: black;
    border: solid #808080 1px;
    background-color: white;
    span {
      font-size: 1rem;
      margin-left: 6px;
    }
    svg {
      color: black;
      width: 3vw;
      height: 3vh;
    }
  `,
  secondary: css`
    color: white;
    border: solid transparent 1px;
    width: 100%;
    font-weight: bold;
    padding: 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    background-color: rgba(109, 109, 110, 0.7);
    svg {
      color: white;
      width: 4.5vw;
      height: 4.5vh;
    }
  `,
};
