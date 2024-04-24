export type SubNavigation = {
  title: string;
  items: NavigationItem[];
};

export type NavigationContent = {
  subNavigations: SubNavigation[];
  bannerSrc?: string;
};

export type NavigationItem = {
  name: string;
  href: string;
  items?: NavigationContent;
};

export type LogoType = {
  src: string;
};

export type UtilityName =
  | 'menu'
  | 'bookmark'
  | 'wishlist'
  | 'cart'
  | 'search'
  | 'account';

export type Utility = {
  name: UtilityName;
  hasBadge?: boolean;
  badgeCount?: number;
};

export type HeaderItemType = 'navigation' | 'logo' | 'utility';

export type HeaderItemContent = NavigationItem[] | LogoType | Utility[];

export type HeaderItem = {
  type: HeaderItemType;
  content: HeaderItemContent;
};

export type MockUserType = {
  href: string;
  name: string;
  description: string;
};
