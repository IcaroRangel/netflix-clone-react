import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

interface ContainerProps extends Pick<ButtonProps, 'variant'> {}

export const Container = styled.button<ContainerProps>`
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.3s;

  ${(props) => buttonModifiers[props.variant || 'default']}
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
    display: block;

    font-weight: bold;
    padding-left: 2rem;
    padding-right: 2.4rem;
    display: flex;
    align-items: center;
    border: 0px;
    border-radius: 4px;
    justify-content: center;
    padding: 0.8rem;
    color: black;
    border: solid #808080 1px;
    background-color: white;
    &:hover {
      border-color: #808080;
    }
  `,
  secondary: css`
    color: #000;
    border: solid #808080 1px;
    background-color: blue;
    border-radius: 4px;
    &:hover {
      background-color: #808080;
    }
  `,
};
