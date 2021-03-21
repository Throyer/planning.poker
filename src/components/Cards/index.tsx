import { ReactNode, useState } from 'react';
import { BiCoffee } from 'react-icons/bi';
import { CgInfinity } from 'react-icons/cg';

import { Card } from '../Card';

import { Container, Content } from './styles';

interface CardsProps {
  onSelect?: (card: ReactNode) => void;
}

export const Cards = ({ onSelect }: CardsProps) => {
  const [cards] = useState<ReactNode[]>([
    '0',
    '1/2',
    '1',
    '2',
    '3',
    '5',
    '8',
    '13',
    '20',
    '40',
    '?',
    <CgInfinity />,
    <BiCoffee />,
  ]);

  const [selectedIndex, setSelectedIndex] = useState<number>();

  return (
    <Container>
      <Content>
        {cards.map((value, index) => (
          <Card
            key={index.toString()}
            fliped={selectedIndex === index}
            onClick={() => {
              setSelectedIndex(index);
              onSelect && onSelect(value);
            }}
            value={value}
          />
        ))}
      </Content>
    </Container>
  );
};
