import styled from 'styled-components';

export const Container = styled.div`
  background: #fafafa;
  border-radius: 8px;

  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;

  text-decoration: none;

  & + div {
    margin-top: 0.5rem;
  }
`;

export const Avatar = styled.img`
  width: 40px;

  margin-left: 17px;
  border-radius: 50%;
`;

export const PlayerContent = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 16px;
    flex: 1;
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const Name = styled.strong`
  font-size: 0.9rem;
  color: #3d3d4d;
`;

export const Info = styled.p`
  font-size: 10px;
  color: #a8a8b3;
  margin-top: 4px;
`;

export const OptionsButton = styled.button`
  justify-self: flex-end;
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  color: #a8a8b3;
  background: #fafafa;
  border: none;
  border-left: 1px solid #efefef;
  padding: 8px;
`;