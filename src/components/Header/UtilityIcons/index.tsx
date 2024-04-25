import type { UtilityName } from '@/components/Header/types';

const UtilityIcon = ({ name }: { name: UtilityName }) => {
  return (
    <svg width={24} height={24} className="feather">
      <use xlinkHref={`/icons/headers.svg#${name}`} />
    </svg>
  );
};

export const MenuIcon = () => {
  return <UtilityIcon name="menu" />;
};

export const CartIcon = () => {
  return <UtilityIcon name="cart" />;
};

export const AccountIcon = () => {
  return <UtilityIcon name="account" />;
};

export const WishlistIcon = () => {
  return <UtilityIcon name="wishlist" />;
};

export const SearchIcon = () => {
  return <UtilityIcon name="search" />;
};

export const BookmarkIcon = () => {
  return <UtilityIcon name="bookmark" />;
};
