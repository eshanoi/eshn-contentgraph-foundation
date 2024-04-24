import type { Utility } from '@/components/Header/types';
import type { TabType } from '@/components/common/Tab/types';
import Cart from '@/components/Header/Cart';
import MobileNavigation from '@/components/Header/MobileHeader/MobileNavigation';
import Wishlist from '@/components/Header/Wishlist';
import MobileAccountMenu from '@/components/Header/MobileHeader/MobileAccountMenu';

export const MOBILE_UTILITIES: Utility[] = [
  {
    name: 'menu',
  },
  {
    name: 'account',
  },
  {
    name: 'cart',
    hasBadge: true,
    badgeCount: 0,
  },
  {
    name: 'wishlist',
    hasBadge: true,
    badgeCount: 0,
  },
];

export const MOBILE_NAVIGATION_TABS: TabType[] = [
  {
    name: 'Menu',
    id: 'menu',
    content: MobileNavigation,
    defaultActive: true,
  },
  {
    name: 'Account',
    id: 'account',
    content: MobileAccountMenu,
  },
  {
    name: 'Cart',
    id: 'cart',
    content: Cart,
  },
  {
    name: 'Favorite',
    id: 'wishlist',
    content: Wishlist,
  },
];
