import Tab from '@/components/common/Tab';
import TabPane from '@/components/common/Tab/TabPane';
import {
  MOBILE_NAVIGATION_TABS,
  MOBILE_UTILITIES,
} from '@/components/Header/MobileHeader/constants';
import getUtilityIcon from '@/components/Header/getUtilityIcon';
import UtilityIconContainer from '@/components/Header/UtilityIconContainer';

const MobileNavigationTabs = () => {
  return (
    <div>
      <Tab.Container className="offside-navbar--nav" id="mobileTabs">
        {MOBILE_NAVIGATION_TABS.map((tab) => {
          const utility = MOBILE_UTILITIES.find(
            (utility) => utility.name === tab.id,
          );

          if (!utility) return;

          const UtilityIcon = getUtilityIcon(utility.name);

          return (
            <Tab.Item
              key={tab.id}
              id={tab.id}
              isActive={tab.defaultActive}
              className="offside-navbar--nav__item icon-menu-description"
            >
              <UtilityIconContainer
                id={`js-${tab.id}`}
                hasBadge={utility.hasBadge}
                badgeCount={utility.badgeCount}
                className="icon-menu-description"
                name={tab.name}
                Icon={<UtilityIcon />}
              />
            </Tab.Item>
          );
        })}
      </Tab.Container>
      <Tab.Content>
        {MOBILE_NAVIGATION_TABS.map((tab) => (
          <TabPane key={tab.id} id={tab.id} defaultActive={tab.defaultActive}>
            {<tab.content />}
          </TabPane>
        ))}
      </Tab.Content>
    </div>
  );
};

export default MobileNavigationTabs;
