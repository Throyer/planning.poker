import { ReactNode } from 'react';
import { GiCardJoker } from 'react-icons/gi';

import {
  Container,
  CardFront,
  CardBack,
  LeftTopValue,
  BottonRightValue,
  Value,
  CardContainer,
  Size,
} from './styles';

interface CardProps {
  size?: Size;
  value: ReactNode;
  hidden?: boolean;
  fliped?: boolean;
  onClick?: () => void;
}

export const Card = ({
  size = 'md',
  value,
  fliped,
  hidden,
  onClick,
}: CardProps) => (
  <Container size={size} onClick={onClick}>
    {hidden ? (
      <CardContainer fliped={fliped}>
        <CardFront>
          <Value size={size}>
            <GiCardJoker />
          </Value>
        </CardFront>
        <CardBack>
          <Value size={size}>
            <GiCardJoker />
          </Value>
        </CardBack>
      </CardContainer>
    ) : (
      <CardContainer fliped={fliped}>
        <CardFront>
          <LeftTopValue size={size}>{value}</LeftTopValue>
          <Value size={size}>{value}</Value>
          <BottonRightValue size={size}>{value}</BottonRightValue>
        </CardFront>
        <CardBack>
          <Value size={size}>{value}</Value>
        </CardBack>
      </CardContainer>
    )}
  </Container>
);
