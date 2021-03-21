import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    height: 45px;

    border: none;

    background: #f6f6f6;
    color: #b8b9bf;

    border-radius: 4px;

    svg {
      font-size: 16px;
    }
  }

  @media (max-width: 785px) {
    margin-top: 0.5rem;
  }
`;
