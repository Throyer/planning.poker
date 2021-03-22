import { ReactNode, useState } from 'react';

import { Card } from '../Card';
import { cards } from '../../utils/cards';

import { Container, Content } from './styles';

interface CardsProps {
  onSelect?: (card: ReactNode) => void;
}

export const Cards = ({ onSelect }: CardsProps) => {
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <Container>
      <Content>
        {cards.map(({ id, value }) => (
          <Card
            size="lg"
            key={id}
            fliped={selectedId === id}
            onClick={() => {
              setSelectedId(id);
              onSelect && onSelect(value);
            }}
            value={value}
          />
        ))}
      </Content>
    </Container>
  );
};
