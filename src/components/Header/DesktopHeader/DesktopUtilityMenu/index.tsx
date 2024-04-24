import DesktopUtilityMenuContainer from '@/components/Header/DesktopHeader/DesktopUtilityMenuContainer';
import type { FC } from 'react';
import Cart from '@/components/Header/Cart';
import Tab from '../../../common/Tab';
import TabPane from '@/components/common/Tab/TabPane';
import { DESKTOP_ACCOUNT_TABS } from '@/components/Header/DesktopHeader/constants';

export type UtilityMenuProps = {
  name: string;
};

export const CartMenu: FC<UtilityMenuProps> = ({ name }) => {
  return (
    <DesktopUtilityMenuContainer className={name}>
      <Cart />
    </DesktopUtilityMenuContainer>
  );
};

export const AccountMenu: FC<UtilityMenuProps> = ({ name }) => {
  return (
    <DesktopUtilityMenuContainer className="login-users">
      <Tab.Container className="login-users__tabs" id="loginUsersTab">
        {DESKTOP_ACCOUNT_TABS.map((tab) => (
          <Tab.Item
            key={`${tab.id}-pc`}
            id={tab.id}
            isActive={tab.defaultActive}
            className="nav-link login-users__item-link login-users__item"
          >
            {tab.name}
          </Tab.Item>
        ))}
      </Tab.Container>
      <Tab.Content className="login-users__content">
        {DESKTOP_ACCOUNT_TABS.map((tab) => (
          <TabPane
            key={`${tab.id}-pc`}
            id={tab.id}
            defaultActive={tab.defaultActive}
          >
            {<tab.content />}
          </TabPane>
        ))}
      </Tab.Content>
    </DesktopUtilityMenuContainer>
  );
};
