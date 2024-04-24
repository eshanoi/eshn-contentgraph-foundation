import type { FC } from 'react';
import {
  AccountIcon,
  CartIcon,
  SearchIcon,
  WishlistIcon,
} from '@/components/Header/UtilityIcons';

type Props = {
  hasBadge?: boolean;
  name?: string;
  Icon: ReturnType<
    | typeof CartIcon
    | typeof AccountIcon
    | typeof WishlistIcon
    | typeof SearchIcon
  >;
  badgeCount?: number;
  className?: string;
  id?: string;
};

const UtilityIconContainer: FC<Props> = ({
  hasBadge,
  name,
  Icon,
  badgeCount,
  className = '',
}) => {
  return (
    <div
      className={`${className} ${hasBadge ? `${className}--has-badge` : ''}`}
    >
      {Icon}
      {hasBadge && <span className="icon-menu__badge">{badgeCount}</span>}
      {name && <span>{name}</span>}
    </div>
  );
};

export default UtilityIconContainer;
