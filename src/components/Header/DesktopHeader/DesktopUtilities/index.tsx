import type { HeaderItemContent, Utility } from '@/components/Header/types';
import type { FC } from 'react';
import getUtilityIcon from '@/components/Header/getUtilityIcon';
import getDesktopUtilityMenu from '@/components/Header/DesktopHeader/getDesktopUtilityMenu';
import DesktopUtilityIcon from '@/components/Header/DesktopHeader/DesktopUtilities/DesktopUtilityIcon';
import SearchUtilityIcon from '@/components/Header/DesktopHeader/DesktopUtilities/SearchUtilityIcon';

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
        const UtilityItem =
          utility.name === 'search' ? (
            <SearchUtilityIcon utility={utility}>
              <UtilityIcon />
            </SearchUtilityIcon>
          ) : (
            <DesktopUtilityIcon utility={utility}>
              <UtilityIcon />
            </DesktopUtilityIcon>
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
