import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
}
export const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
