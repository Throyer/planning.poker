import { ReactNode } from 'react';
import { BiCoffee } from 'react-icons/bi';
import { CgInfinity } from 'react-icons/cg';

import { Card } from '../Card';

import { Container, Content } from './styles';

const values: ReactNode[] = [
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
];

export const Cards = () => (
  <Container>
    <Content>
      {values.map((value, index) => (
        <Card key={index.toString()} value={value} />
      ))}
    </Content>
  </Container>
);
