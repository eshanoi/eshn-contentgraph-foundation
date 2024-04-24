import type { UtilityName } from '@/components/Header/types';
import {
  AccountIcon,
  BookmarkIcon,
  CartIcon,
  MenuIcon,
  SearchIcon,
  WishlistIcon,
} from '@/components/Header/UtilityIcons';

export const utilityIcons: Record<UtilityName, () => JSX.Element> = {
  menu: MenuIcon,
  cart: CartIcon,
  bookmark: BookmarkIcon,
  account: AccountIcon,
  search: SearchIcon,
  wishlist: WishlistIcon,
};

export const getUtilityIcon = (utilityName: UtilityName) => {
  return utilityIcons[utilityName];
};

export default getUtilityIcon;
