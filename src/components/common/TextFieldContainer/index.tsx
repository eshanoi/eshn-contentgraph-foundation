import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TextFieldContainer: FC<Props> = ({ children }) => {
  return <div className="form-group">{children}</div>;
};

export default TextFieldContainer;
