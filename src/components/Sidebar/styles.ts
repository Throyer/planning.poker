import styled from 'styled-components';

import { Scrollbars } from 'react-custom-scrollbars';

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  flex-direction: column;

  border-right: 1px solid #f1f1f1;
  padding-right: 0.5rem;
`;

export const Players = styled(Scrollbars)`
  flex: 1;
`;

export const Me = styled.div`
  margin-top: 0.5rem;
`;
