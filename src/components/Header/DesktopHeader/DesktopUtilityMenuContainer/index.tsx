import type { FC, ReactNode } from 'react';

type Props = {
  className: string;
  children: ReactNode;
};

const DesktopUtilityMenuContainer: FC<Props> = ({ className, children }) => {
  return (
    <div className={`dropdown-menu dropdown-menu--customized ${className}`}>
      {children}
    </div>
  );
};

export default DesktopUtilityMenuContainer;
