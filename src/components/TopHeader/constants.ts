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
        flagCode: 'australia',
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
        name: 'Brazil',
        flagCode: 'brazil',
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
        flagCode: 'canada',
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
        flagCode: 'chile',
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
        flagCode: 'germany',
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
        flagCode: 'spain',
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
        flagCode: 'france',
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
        flagCode: 'japan',
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
        flagCode: 'netherlands',
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
        flagCode: 'norway',
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
        flagCode: 'saudi-arabia',
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
        flagCode: 'sweden',
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
        flagCode: 'united-kingdom',
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
        flagCode: 'united-states-of-america',
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
