import type { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  isActive?: boolean;
  id: string;
  children: ReactNode | string;
};

const TabItem: FC<Props> = ({ className = '', isActive, id, children }) => {
  return (
    <li className="nav-item">
      <a
        className={`${className} ${isActive ? 'active' : ''}`}
        id={id}
        data-bs-toggle="tab"
        data-bs-target={`#${id}-panel`}
        role="tab"
        aria-controls={`${id}-panel`}
        aria-selected="true"
      >
        {children}
      </a>
    </li>
  );
};

export default TabItem;
