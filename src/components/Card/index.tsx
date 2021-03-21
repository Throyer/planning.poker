import { ReactNode } from 'react';

import { Container, LTValue, BRValue, Value } from './styles';

interface CardProps {
  value: ReactNode;
}

export const Card = ({ value }: CardProps) => (
  <Container>
    <LTValue>{value}</LTValue>
    <Value>{value}</Value>
    <BRValue>{value}</BRValue>
  </Container>
);
