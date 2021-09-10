import styled from 'styled-components';
import { ButtonProps } from '.';

interface ContainerProps extends Pick<ButtonProps, 'variant'> {}

export const Container = styled.button<ContainerProps>``;
