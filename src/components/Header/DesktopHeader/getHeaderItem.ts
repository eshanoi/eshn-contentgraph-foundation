import type { HeaderItem } from '@/components/Header/types';
import Logo from '@/components/Header/Logo';
import DesktopNavigation from '@/components/Header/DesktopHeader/DesktopNavigation';
import DesktopUtilities from '@/components/Header/DesktopHeader/DesktopUtilities';

export const desktopHeaderItems = {
  logo: Logo,
  navigation: DesktopNavigation,
  utility: DesktopUtilities,
};

export const getHeaderItem = (
  headerItem: HeaderItem,
  resolution: 'pc' | 'mobile',
) => {
  if (resolution === 'pc') {
    return desktopHeaderItems[headerItem.type];
  }
};

export default getHeaderItem;
