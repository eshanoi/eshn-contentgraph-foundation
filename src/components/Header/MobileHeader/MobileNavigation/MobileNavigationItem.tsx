import type { FC } from 'react';
import Link from 'next/link';

type NavigationItemProps = {
  href?: string;
  name: string;
  className?: string;
};

const NavigationItem: FC<NavigationItemProps> = ({ name, href, className }) => {
  return (
    <li className={`offside-navbar--menu__item ${className}`}>
      <Link href={href || ''}>{name}</Link>
    </li>
  );
};

export default NavigationItem;
