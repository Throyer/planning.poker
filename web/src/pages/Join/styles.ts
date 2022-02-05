import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-width: 1120px;
  height: 80vh;

  padding: 0.5rem;

  background: #fff;
  border-radius: 0.3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  border-top: 1px solid #e6e6f0;

  input {
    background: #fafafc;
    font-weight: 500;

    height: 46px;

    box-sizing: border-box;
    padding: 3px 3px 3px 13px;

    border: 1px solid #e6e6f0;
    border-radius: 5px;

    margin-top: 16px;

    &::placeholder {
      font-weight: 500;
      text-align: center;
      color: #b8b9bf;
      text-transform: uppercase;
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    width: 250px;
    height: 250px;

    border-radius: 50%;
  }

  p {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 13px;
    color: #b8b9bf;

    code {
      margin-left: 3px;
      color: #000;
    }
  }
`;

export const BlankAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 59px;
  color: #fff;

  width: 250px;
  height: 250px;

  border-radius: 50%;
  background: #e6e6f0;
`;

export const ButtonContainer = styled.div`
  display: flex;

  button {
    width: 100%;
    margin-top: 16px;
    text-transform: uppercase;
  }

  .left {
    border-radius: 5px 0 0 5px;
  }

  .right {
    border-radius: 0 5px 5px 0;
  }
`;
