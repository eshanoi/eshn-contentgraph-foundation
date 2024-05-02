import Collapse from '@/components/common/Collapse';
import { NAVIGATIONS } from '@/components/Header/constants';
import convertNavigationIntoNestedList from '@/components/Header/MobileHeader/MobileNavigation/convertNavigationIntoNestedList';
import MobileNavigationNestedList from '@/components/Header/MobileHeader/MobileNavigation/MobileNavigationNestedList';
import NavigationItem from '@/components/Header/MobileHeader/MobileNavigation/MobileNavigationItem';

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
                    <MobileNavigationNestedList
                      subNavigation={subNavigation}
                      key={`${subNavigation.title}-${navigation.name}-${navigation.href}`}
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
