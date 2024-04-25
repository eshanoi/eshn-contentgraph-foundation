import Collapse from '@/components/common/Collapse';
import NestedList from '@/components/common/NestedList';
import { NAVIGATIONS } from '@/components/Header/constants';
import Link from 'next/link';
import type { FC } from 'react';
import convertNavigationIntoNestedList from '@/components/Header/MobileHeader/MobileNavigation/convertNavigationIntoNestedList';

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

const MobileNavigation = () => {
  return (
    <div>
      <ul className="offside-navbar--menu">
        {NAVIGATIONS.map((navigation) => {
          if (navigation.items) {
            return (
              <Collapse
                key={navigation.name}
                name="clothing"
                id="clothing"
                className="offside-navbar--menu__item"
              >
                {convertNavigationIntoNestedList(
                  navigation?.items?.subNavigations,
                ).map((subNavigation) => {
                  return (
                    <NestedList
                      key={`${subNavigation.title}-${navigation.name}`}
                      className="offside-navbar--menu child-menu"
                      list={subNavigation}
                      Title={({ title }) => (
                        <NavigationItem
                          name={title}
                          href="#"
                          className="main-category"
                        />
                      )}
                      Item={({ item }) => (
                        <NavigationItem name={item.name} href={item.href} />
                      )}
                    />
                  );
                })}
              </Collapse>
            );
          }

          return (
            <NavigationItem
              key={navigation.name}
              name={navigation.name}
              href={navigation.href}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNavigation;
