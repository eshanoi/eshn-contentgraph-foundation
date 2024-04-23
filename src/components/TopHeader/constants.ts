import type { MarketType } from '@/components/TopHeader/types';

export const MARKET_COOKIES = {
  MarketId: 'MarketId',
  Language: 'Language',
  Currency: 'Currency',
} as const;

export const MARKETS: MarketType[] = [
  {
    id: 'AUS',
    name: 'Australia',
    countries: [
      {
        name: 'Australia',
        flagSrc: '/icons/flags/australia.svg',
      },
    ],
    currencies: [
      {
        name: 'Australian Dollar',
        code: 'AUD',
        symbol: '$',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'BRA',
    name: 'Brazil',
    countries: [
      {
        name: 'Australia',
        flagSrc: '/icons/flags/brazil.svg',
      },
    ],
    currencies: [
      {
        name: 'Brazilian Real',
        code: 'AUD',
        symbol: 'R$',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'CAN',
    name: 'Canada',
    countries: [
      {
        name: 'Canada',
        flagSrc: '/icons/flags/canada.svg',
      },
    ],
    currencies: [
      {
        name: 'Canadian Dollar',
        code: 'CAD',
        symbol: '$',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'CHL',
    name: 'Chile',
    countries: [
      {
        name: 'Chile',
        flagSrc: '/icons/flags/chile.svg',
      },
    ],
    currencies: [
      {
        name: 'Chilean Peso',
        code: 'CLP',
        symbol: '$',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'DEU',
    name: 'Germany',
    countries: [
      {
        name: 'Germany',
        flagSrc: '/icons/flags/germany.svg',
      },
    ],
    currencies: [
      {
        name: 'Euro',
        code: 'EUR',
        symbol: '€',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'ESP',
    name: 'Spain',
    countries: [
      {
        name: 'Spain',
        flagSrc: '/icons/flags/spain.svg',
      },
    ],
    currencies: [
      {
        name: 'Euro',
        code: 'EUR',
        symbol: '€',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'FR',
    name: 'France',
    countries: [
      {
        name: 'France',
        flagSrc: '/icons/flags/france.svg',
      },
    ],
    currencies: [
      {
        name: 'Euro',
        code: 'EUR',
        symbol: '€',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'français',
        code: 'fr',
        isDefault: true,
      },
    ],
  },
  {
    id: 'JPN',
    name: 'Japan',
    countries: [
      {
        name: 'Japan',
        flagSrc: '/icons/flags/japan.svg',
      },
    ],
    currencies: [
      {
        name: 'Japanese Yen',
        code: 'JPY',
        symbol: '￥',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'NLD',
    name: 'Netherlands',
    countries: [
      {
        name: 'Netherlands',
        flagSrc: '/icons/flags/netherlands.svg',
      },
    ],
    currencies: [
      {
        name: 'Euro',
        code: 'EUR',
        symbol: '€',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'NOR',
    name: 'Norway',
    countries: [
      {
        name: 'Norway',
        flagSrc: '/icons/flags/norway.svg',
      },
    ],
    currencies: [
      {
        name: 'Norwegian Krone',
        code: 'KR',
        symbol: 'kr',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'SAU',
    name: 'Saudi Arabia',
    countries: [
      {
        name: 'Saudi Arabia',
        flagSrc: '/icons/flags/saudi-arabia.svg',
      },
    ],
    currencies: [
      {
        name: 'Saudi Riyal',
        code: 'SAR',
        symbol: 'ر.س.‏',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'SWE',
    name: 'Sweden',
    countries: [
      {
        name: 'Sweden',
        flagSrc: '/icons/flags/sweden.svg',
      },
    ],
    currencies: [
      {
        name: 'Swedish Krona',
        code: 'SEK',
        symbol: 'kr',
        isDefault: true,
      },
      {
        name: 'US Dollar',
        code: 'USA',
        symbol: '$',
      },
    ],
    languages: [
      {
        name: 'svenska',
        code: 'sv',
        isDefault: true,
      },
      {
        name: 'English',
        code: 'en',
      },
    ],
  },
  {
    id: 'UK',
    name: 'United Kingdom',
    countries: [
      {
        name: 'United Kingdom',
        flagSrc: '/icons/flags/united-kingdom.svg',
      },
    ],
    currencies: [
      {
        name: 'Pound Sterling',
        code: 'GBP',
        symbol: '£',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
  {
    id: 'US',
    name: 'United States',
    isDefault: true,
    countries: [
      {
        name: 'United States',
        flagSrc: '/icons/flags/united-states-of-america.svg',
      },
    ],
    currencies: [
      {
        name: 'US Dollar',
        code: 'USA',
        symbol: '$',
        isDefault: true,
      },
    ],
    languages: [
      {
        name: 'English',
        code: 'en',
        isDefault: true,
      },
    ],
  },
];
