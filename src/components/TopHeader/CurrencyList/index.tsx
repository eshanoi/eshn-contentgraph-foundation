'use client';

import type { CurrencyType } from '@/components/TopHeader/types';
import type { FC } from 'react';
import { MARKET_COOKIES } from '@/components/TopHeader/constants';
import useChangeMarketData from '@/components/TopHeader/hooks/useChangeMarketData';

type Props = {
  currentCurrency?: CurrencyType;
  currencies?: CurrencyType[];
};

const CurrencyList: FC<Props> = ({ currentCurrency, currencies }) => {
  const { onChangeMarketData } = useChangeMarketData();

  return (
    <div className="currency-list">
      <div className="currency-list__label">
        <span>{currentCurrency?.code}</span>
      </div>
      <div className="currency-list__list">
        {currencies?.map((currency) => (
          <div
            key={currency.code}
            className="language-list__language-text"
            onClick={() =>
              onChangeMarketData({
                cookieName: MARKET_COOKIES.Currency,
                value: currency.code,
              })
            }
          >
            <span>
              {currency.code} - {currency.symbol}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyList;
