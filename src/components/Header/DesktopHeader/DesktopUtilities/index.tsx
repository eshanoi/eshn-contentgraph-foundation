import type { HeaderItemContent, Utility } from '@/components/Header/types';
import type { FC } from 'react';
import getUtilityIcon from '@/components/Header/getUtilityIcon';
import UtilityIconContainer from '@/components/Header/UtilityIconContainer';
import getDesktopUtilityMenu from '@/components/Header/DesktopHeader/getDesktopUtilityMenu';

type Props = {
  content: HeaderItemContent;
};

const DesktopUtilities: FC<Props> = ({ content }) => {
  const utilities = content as Utility[];
  return (
    <ul className="navigation__right">
      {utilities.map((utility) => {
        const UtilityIcon = getUtilityIcon(utility.name);
        const UtilityMenu = getDesktopUtilityMenu(utility.name);
        const UtilityItem = (
          <UtilityIconContainer
            id={`js-${utility.name}`}
            hasBadge={utility.hasBadge}
            badgeCount={utility.badgeCount}
            className="icon-menu"
            Icon={<UtilityIcon />}
          />
        );
        return (
          <li key={`${utility.name}-pc`}>
            <div className="dropdown">
              {UtilityIcon() && (
                <>
                  {UtilityMenu ? (
                    <div
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      {UtilityItem}
                    </div>
                  ) : (
                    <>{UtilityItem}</>
                  )}
                </>
              )}
              {UtilityMenu && <UtilityMenu name={utility.name} />}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopUtilities;
