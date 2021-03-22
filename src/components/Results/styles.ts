import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;

  width: 768px;
  gap: 1.5rem;
  margin-top: 2.5rem;

  display: flex;
  flex-wrap: wrap;

  align-content: flex-start;
  justify-content: center;
`;

export const ResultGroup = styled.div`
  width: 158px;
  display: flex;

  position: relative;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ResultCard = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
`;

export const Players = styled.div`
  width: 124px;
  line-height: 15px;

  img {
    width: 40px;
    height: 40px;

    margin-left: -9px;
    display: inline;

    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    border-radius: 50%;
    border: 2px solid #fafafa;
  }
`;
