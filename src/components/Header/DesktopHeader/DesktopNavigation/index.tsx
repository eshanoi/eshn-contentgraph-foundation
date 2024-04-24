import type {
  HeaderItemContent,
  NavigationItem,
} from '@/components/Header/types';
import type { FC } from 'react';
import Link from 'next/link';
import DesktopNavigationItemContent from '@/components/Header/DesktopHeader/DesktopNavigationItemContent';

type Props = {
  content: HeaderItemContent;
};

const DesktopNavigation: FC<Props> = ({ content }) => {
  const navigationItems = content as NavigationItem[];
  return (
    <div className="navigation__left">
      <ul className="navigation__left--menu">
        {navigationItems.map((item) => (
          <li key={`${item.name}-pc`} className="navigation__item">
            <Link href={item.href}>{item.name}</Link>
            {item.items && <DesktopNavigationItemContent {...item.items} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavigation;
