import type { FC, ReactNode } from 'react';

type Props = {
  id: string;
  children: ReactNode;
  defaultActive?: boolean;
};

const TabPane: FC<Props> = ({ id, children, defaultActive }) => {
  return (
    <div
      className={`tab-pane fade ${defaultActive ? 'active show' : ''}`}
      id={`${id}-panel`}
      role="tabpanel"
      aria-labelledby={id}
    >
      {children}
    </div>
  );
};

export default TabPane;
