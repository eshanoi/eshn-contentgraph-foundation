import UtilityIconContainer from '@/components/Header/UtilityIconContainer';
import { type FC, type ReactNode } from 'react';
import type { Utility } from '@/components/Header/types';

type Props = {
  children: ReactNode;
  utility: Utility;
};

const DesktopUtilityIcon: FC<Props> = ({ utility, children }) => {
  return (
    <UtilityIconContainer
      id={`js-${utility.name}`}
      hasBadge={utility.hasBadge}
      badgeCount={utility.badgeCount}
      className="icon-menu"
      Icon={<>{children}</>}
    />
  );
};

export default DesktopUtilityIcon;
