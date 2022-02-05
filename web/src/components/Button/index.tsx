import { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

export const Button = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <CustomButton {...rest}>{children}</CustomButton>
);
