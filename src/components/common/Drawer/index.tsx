import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Drawer: FC<Props> = ({ children }) => {
  return (
    <div
      className="offcanvas offcanvas-start offside-navbar"
      id="offcanvasNavbar"
      data-bs-scroll="true"
      aria-labelledby="offcanvasNavbarLabel"
      style={{ maxWidth: '324px' }}
    >
      {children}
    </div>
  );
};

export default Drawer;
