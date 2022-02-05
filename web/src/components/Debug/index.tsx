import { HTMLAttributes } from 'react';

export const Debug = ({
  data,
  ...rest
}: { data: any } & HTMLAttributes<HTMLPreElement>) => (
  <pre {...rest}>{JSON.stringify(data, undefined, 4)}</pre>
);
