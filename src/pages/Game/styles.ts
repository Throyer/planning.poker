import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 300px 1fr;
  grid-template-rows: 80vh 1fr;

  column-gap: 0.5rem;

  margin-top: 5rem;
  padding: 0.5rem;

  background: #fff;
  border-radius: 0.3rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
  }
`;

export const Players = styled.div`
  display: flex;

  justify-content: space-between;
  flex-direction: column;

  .fela {
    flex: 1;
    overflow-y: auto;
  }
`;
