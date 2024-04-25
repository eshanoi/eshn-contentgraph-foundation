import type { SubNavigation } from '@/components/Header/types';
import type { NestedListType } from '@/components/common/NestedList/types';

export const convertNavigationIntoNestedList = (
  subNavigations?: SubNavigation[],
) => {
  if (!subNavigations?.length) return [];
  const results: NestedListType[] = subNavigations.map((subNavigation) => ({
    title: subNavigation.title,
    items: subNavigation.items.map((item) => ({
      name: item.name,
      href: item.href,
      items: convertNavigationIntoNestedList(item.items?.subNavigations),
    })),
  }));
  return results;
};

export default convertNavigationIntoNestedList;
