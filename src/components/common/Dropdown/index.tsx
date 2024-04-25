import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Dropdown: FC<Props> = ({ children }) => {
  return (
    <div className="dropdown">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
