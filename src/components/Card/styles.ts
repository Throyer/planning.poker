import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface Flipable {
  fliped?: boolean;
}

export type Size = 'sm' | 'md' | 'lg';

interface Sizable {
  size: Size;
}

const sizes = {
  sm: {
    box: css`
      width: 38px;
      height: 50px;
    `,
    font: {
      main: css`
        font-size: 20px;
      `,
      info: css`
        font-size: 7px;
      `,
    },
  },
  md: {
    box: css`
      width: 68px;
      height: 98px;
    `,
    font: {
      main: css`
        font-size: 33px;
      `,
      info: css`
        font-size: 16px;
      `,
    },
  },
  lg: {
    box: css`
      width: 98px;
      height: 148px;
    `,
    font: {
      main: css`
        font-size: 58px;
      `,
      info: css`
        font-size: 20px;
      `,
    },
  },
};

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

export const Container = styled.div<Sizable>`
  ${({ size }) => sizes[size].box}

  perspective: 1000px;
  background: transparent;
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

export const LeftTopValue = styled.span<Sizable>`
  position: absolute;
  top: 5px;
  left: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size }) => sizes[size].font.info}
`;

export const BottonRightValue = styled.span<Sizable>`
  position: absolute;
  bottom: 5px;
  right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size }) => sizes[size].font.info}
`;

export const Value = styled.span<Sizable>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) => sizes[size].font.main}
`;

export const CardFront = styled.div`
  ${card}

  transition: transform 0.1s;
  cursor: pointer;

  :hover {
    transform: rotateY(30deg);
    background: ${darken(0.1, '#424242')};
  }

  background: #424242;
  color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
`;

export const CardBack = styled.div`
  ${card}

  transform: rotateY(180deg);
  background: #ccc;
`;
