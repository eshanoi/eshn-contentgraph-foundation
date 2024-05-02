import NestedList from '@/components/common/NestedList';
import type { NestedListType } from '@/components/common/NestedList/types';
import type { FC } from 'react';
import NavigationItem from '@/components/Header/MobileHeader/MobileNavigation/MobileNavigationItem';

type Props = {
  subNavigation: NestedListType;
};

const MobileNavigationNestedList: FC<Props> = ({ subNavigation }) => {
  return (
    <NestedList
      className="offside-navbar--menu child-menu"
      list={subNavigation}
      Title={({ title }) => (
        <NavigationItem
          key={subNavigation.title}
          name={title}
          href="#"
          className="main-category"
        />
      )}
      Item={({ item }) => (
        <NavigationItem key={item.href} name={item.name} href={item.href} />
      )}
    />
  );
};

export default MobileNavigationNestedList;
