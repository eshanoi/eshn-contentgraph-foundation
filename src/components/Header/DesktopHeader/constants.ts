import type { HeaderItem, Utility } from '@/components/Header/types';
import { LOGO_SRC, NAVIGATIONS } from '@/components/Header/constants';
import type { TabType } from '@/components/common/Tab/types';
import SignIn from '@/components/Header/DesktopHeader/DesktopSignInForm';
import SignUp from '@/components/Header/SignUp';
import DesktopMockUserList from './DesktopMockUserList';

export const DESKTOP_UTILITIES: Utility[] = [
  {
    name: 'cart',
    hasBadge: true,
    badgeCount: 0,
  },
  {
    name: 'search',
  },
  {
    name: 'account',
  },
];

export const DESKTOP_HEADER_ITEMS: HeaderItem[] = [
  {
    type: 'navigation',
    content: NAVIGATIONS,
  },
  {
    type: 'logo',
    content: {
      src: LOGO_SRC,
    },
  },
  {
    type: 'utility',
    content: DESKTOP_UTILITIES,
  },
];
export const DESKTOP_ACCOUNT_TABS: TabType[] = [
  {
    name: 'Sign in',
    id: 'signIn',
    content: SignIn,
    defaultActive: true,
  },
  {
    name: 'Sign up',
    id: 'signUp',
    content: SignUp,
  },
  {
    name: 'Users',
    id: 'users',
    content: DesktopMockUserList,
  },
];
