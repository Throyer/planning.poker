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
    display: flex;

    input {
      background: #fafafc;
      border: 1px solid #e6e6f0;
      box-sizing: border-box;
      border-radius: 5px 0 0 5px;

      padding: 3px 3px 3px 13px;

      &::placeholder {
        font-weight: 500;
        text-align: center;
        color: #b8b9bf;
        text-transform: uppercase;
      }
    }

    button {
      border-radius: 0 5px 5px 0;
      width: 122px;
    }
  }
`;
