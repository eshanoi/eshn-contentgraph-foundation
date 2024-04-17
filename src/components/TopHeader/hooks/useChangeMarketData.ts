'use client';

import { useCallback } from 'react';
import { setCookie } from 'cookies-next';
import { MARKET_COOKIES, MARKETS } from '@/components/TopHeader/constants';
import { windowReload } from '@/utils/windowReload';

type SetMarketCookie = {
  cookieName: keyof typeof MARKET_COOKIES;
  value: string;
};

const useChangeMarketData = () => {
  const onSetMarketCookie = useCallback(
    ({ cookieName, value }: SetMarketCookie) => {
      setCookie(MARKET_COOKIES[cookieName], value);
    },
    [],
  );

  const onChangeMarketData = useCallback(
    (params: SetMarketCookie) => {
      onSetMarketCookie(params);
      windowReload();
    },
    [onSetMarketCookie],
  );

  const onChangeMarket = useCallback(
    (value: string) => {
      const selectedMarket = MARKETS.find((market) => market.id === value);

      if (selectedMarket) {
        const defaultCurrency = selectedMarket.currencies.find(
          (currency) => currency.isDefault,
        );
        const defaultLanguage = selectedMarket.languages.find(
          (language) => language.isDefault,
        );

        if (defaultCurrency)
          onSetMarketCookie({
            cookieName: MARKET_COOKIES.Currency,
            value: defaultCurrency.code,
          });

        if (defaultLanguage)
          onSetMarketCookie({
            cookieName: MARKET_COOKIES.Language,
            value: defaultLanguage.code,
          });

        onSetMarketCookie({
          cookieName: MARKET_COOKIES.MarketId,
          value: selectedMarket.id,
        });

        windowReload();
      }
    },
    [onSetMarketCookie],
  );

  return { onChangeMarketData, onChangeMarket };
};

export default useChangeMarketData;
