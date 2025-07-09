import type { MockUserType, NavigationItem } from '@/components/Header/types';

export const NAVIGATIONS: NavigationItem[] = [
  {
    name: 'Clothing',
    href: '/clothing',
    items: {
      subNavigations: [
        {
          items: [
            {
              name: 'Shoes',
              href: '/men/shoes',
            },
            {
              name: 'Jackets',
              href: '/men/jackets',
            },
            {
              name: 'Suits',
              href: '/men/suits',
            },
            {
              name: 'Sweaters',
              href: '/men/sweaters',
            },
          ],
          title: 'Men',
        },
        {
          items: [
            {
              name: 'Shoes',
              href: '/women/shoes',
            },
            {
              name: 'Jackets',
              href: '/women/jackets',
            },
            {
              name: 'Suits',
              href: '/women/suits',
            },
            {
              name: 'Sweaters',
              href: '/women/sweaters',
            },
          ],
          title: 'Women',
        },
      ],
      bannerSrc: '/images/clothing-navigation-banner.png',
    },
  },
  { name: 'Inspiration', href: '/guides/inspiration' },
  { name: 'New', href: '/new-arrivals' },
  { name: 'Sale', href: '/sale2' },
];

export const LOGO_SRC = '/logo.svg';

export const MOCK_USERS: MockUserType[] = [
  {
    name: 'Perry Riley',
    href: '#',
    description: 'Has global admin rights',
  },
  {
    name: 'John Smith',
    href: '#',
    description: 'Has a customer catalog for subset of products',
  },
  {
    name: 'Mike Jones',
    href: '#',
    description: 'Has admin rights for organization',
  },
  {
    name: 'Paul Wall',
    href: '#',
    description: 'Has purchasing rights for organization',
  },
  {
    name: 'Don Juan',
    href: '#',
    description: 'Has approver rights for organization',
  },
  {
    name: 'Ed Kennedy',
    href: '#',
    description: 'Has sales rep role',
  },
];
