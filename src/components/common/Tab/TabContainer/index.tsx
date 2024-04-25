import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const TabContainer: FC<Props> = ({ children, className, id }) => {
  return (
    <ul className={`nav nav-tabs ${className}`} id={id} role="tablist">
      {children}
    </ul>
  );
};

export default TabContainer;
