import { ReactNode } from 'react';

import {
  Container,
  CardFront,
  CardBack,
  LTValue,
  BRValue,
  Value,
  CardContainer,
} from './styles';

interface CardProps {
  value: ReactNode;
  fliped?: boolean;
  onClick?: () => void;
}

export const Card = ({ value, fliped, onClick }: CardProps) => (
  <Container onClick={onClick}>
    <CardContainer fliped={fliped}>
      <CardFront>
        <LTValue>{value}</LTValue>
        <Value>{value}</Value>
        <BRValue>{value}</BRValue>
      </CardFront>
      <CardBack>
        <Value>{value}</Value>
      </CardBack>
    </CardContainer>
  </Container>
);
