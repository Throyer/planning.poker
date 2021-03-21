import styled from 'styled-components';

export const Container = styled.div`
  width: 110px;
  height: 140px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  position: relative;

  background: #424242;
  color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
`;

export const LTValue = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BRValue = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.span`
  font-size: 45px;
`;
