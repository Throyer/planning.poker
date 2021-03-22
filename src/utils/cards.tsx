import { ReactNode } from 'react';

import { BiCoffee } from 'react-icons/bi';
import { CgInfinity } from 'react-icons/cg';

export interface CardData {
  id: string;
  value: ReactNode;
}

export const cards: CardData[] = [
  {
    id: '0',
    value: '0',
  },
  {
    id: '1/2',
    value: '1/2',
  },
  {
    id: '1',
    value: '1',
  },
  {
    id: '2',
    value: '2',
  },
  {
    id: '3',
    value: '3',
  },
  {
    id: '5',
    value: '5',
  },
  {
    id: '8',
    value: '8',
  },
  {
    id: '13',
    value: '13',
  },
  {
    id: '20',
    value: '20',
  },
  {
    id: '40',
    value: '40',
  },
  {
    id: '?',
    value: '?',
  },
  {
    id: 'infinity',
    value: <CgInfinity />,
  },
  {
    id: 'coffe',
    value: <BiCoffee />,
  },
];
