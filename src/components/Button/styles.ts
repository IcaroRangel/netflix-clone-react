import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import { shade } from 'polished';
interface ContainerProps extends Pick<ButtonProps, 'variant'> {}

export const Container = styled.button<ContainerProps>`
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.3s;
  ${(props) => buttonModifiers[props.variant || 'default']}
  span {
    font-size: 1rem;
    background-color: transparent;
    margin-left: 10px;
  }
  svg {
    background: transparent;
  }
`;

const buttonModifiers = {
  default: css`
    font-size: 0.9rem;
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
    font-weight: bold;
    padding: 0.75rem 1.4rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    color: black;
    border: solid #808080 1px;
    background-color: white;

    svg {
      color: black;
      width: 1rem;
      height: 1rem;
    }
    &:hover {
      background: ${shade(0.3, 'white')};
    }
  `,
  secondary: css`
    color: white;
    border: solid transparent 1px;
    font-weight: bold;
    padding: 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    background-color: rgba(109, 109, 110, 0.7);
    svg {
      color: white;
      width: 1.4rem;
      height: 1.4rem;
    }
    &:hover {
      background-color: ${shade(0.3, 'rgba(109, 109, 110, 0.7)')};
    }
  `,
};
