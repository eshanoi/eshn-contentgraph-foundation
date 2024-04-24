import type { UtilityName } from '@/components/Header/types';
import {
  AccountMenu,
  CartMenu,
  type UtilityMenuProps,
} from '@/components/Header/DesktopHeader/DesktopUtilityMenu';
import type { FC } from 'react';

export const DESKTOP_UTILITY_MENU: Partial<
  Record<UtilityName, FC<UtilityMenuProps>>
> = {
  cart: CartMenu,
  account: AccountMenu,
};

export const getDesktopUtilityMenu = (utilityName: UtilityName) => {
  return DESKTOP_UTILITY_MENU[utilityName];
};

export default getDesktopUtilityMenu;
