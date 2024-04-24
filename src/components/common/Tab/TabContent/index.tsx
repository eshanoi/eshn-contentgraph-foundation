import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const TabContent: FC<Props> = ({ children, className = '' }) => {
  return <div className={`tab-content ${className}`}>{children}</div>;
};

export default TabContent;
