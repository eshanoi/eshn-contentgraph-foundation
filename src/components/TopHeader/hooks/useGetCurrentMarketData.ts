'use client';

import { MARKET_COOKIES, MARKETS } from '@/components/TopHeader/constants';
import { useMemo } from 'react';
import { getCookie } from 'cookies-next';

const useGetCurrentMarketData = () => {
  // I'm using client side cookies here mostly because using server side cookies will disable static generation
  // FYI: https://nextjs.org/docs/app/api-reference/functions/cookies
  const userMarketId = getCookie(MARKET_COOKIES.MarketId);
  const userLanguage = getCookie(MARKET_COOKIES.Language);
  const userCurrency = getCookie(MARKET_COOKIES.Currency);

  const currentMarket = useMemo(
    () =>
      MARKETS.find((market) =>
        userMarketId ? userMarketId === market.id : market.isDefault,
      ),
    [userMarketId],
  );

  // TODO: Update later if multiple countries are existed in a single market
  const currentCountry = useMemo(
    () => currentMarket?.countries?.[0],
    [currentMarket],
  );

  const currentLanguage = useMemo(
    () =>
      currentMarket?.languages.find((language) =>
        userLanguage ? userLanguage === language.code : language.isDefault,
      ),
    [currentMarket?.languages, userLanguage],
  );

  const currentCurrency = useMemo(
    () =>
      currentMarket?.currencies.find((currency) =>
        userCurrency ? userCurrency === currency.code : currency.isDefault,
      ),
    [currentMarket?.currencies, userCurrency],
  );

  return { currentCountry, currentLanguage, currentCurrency, currentMarket };
};

export default useGetCurrentMarketData;
