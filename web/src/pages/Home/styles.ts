import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 1120px;
  height: 80vh;

  padding: 0.5rem;

  background: #fff;
  border-radius: 0.3rem;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    width: 40%;

    button {
      flex: 1;

      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-left: 4px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }
`;
