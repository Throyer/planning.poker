import styled, { css } from 'styled-components';

interface Flipable {
  fliped?: boolean;
}

const card = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  color: #424242;
`;

export const Container = styled.div`
  width: 110px;
  height: 140px;

  perspective: 1000px;
  background: transparent;

  cursor: pointer;
`;

export const CardContainer = styled.div<Flipable>`
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${({ fliped }) =>
    fliped &&
    css`
      transform: rotateY(180deg);
    `}
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
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 45px;
`;

export const CardFront = styled.div`
  ${card}

  background: #424242;
  color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
`;

export const CardBack = styled.div`
  ${card}

  transform: rotateY(180deg);
  background: #ccc;
`;
