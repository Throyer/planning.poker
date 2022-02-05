import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  > div {
    display: flex;
    justify-content: start;

    align-items: center;
    gap: 0.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 20px;
    height: 50px;

    border: none;

    background: #f6f6f6;
    color: #b8b9bf;

    border-radius: 4px;

    svg {
      font-size: 16px;
    }

    transition: background 0.5s, color 0.5s;

    :hover {
      background: ${darken(0.2, '#f6f6f6')};
      color: ${darken(0.2, '#b8b9bf')};
    }
  }

  @media (max-width: 910px) {
    margin-top: 0.5rem;
  }
`;
