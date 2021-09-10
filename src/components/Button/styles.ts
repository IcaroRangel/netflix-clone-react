import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

interface ContainerProps extends Pick<ButtonProps, 'variant'> {}

export const Container = styled.button<ContainerProps>`
  padding: 0.5em 1.5em;
  cursor: pointer;
  transition: all 0.3s;

  ${(props) => buttonModifiers[props.variant || 'default']}
`;

const buttonModifiers = {
  default: css`
    color: #808080;
    border: solid #808080 1px;
    background-color: transparent;
    &:hover {
      color: #fff;
      border-color: #fff;
    }
  `,
  primary: css`
    color: #000;
    border: solid #808080 1px;
    background-color: #fff;
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
