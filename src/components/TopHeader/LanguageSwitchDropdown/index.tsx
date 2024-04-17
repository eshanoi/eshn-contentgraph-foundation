'use client';

import MarketList from '@/components/TopHeader/MarketList';
import type { FC } from 'react';
import LanguageList from '@/components/TopHeader/LanguageList';
import type {
  CurrencyType,
  LanguageType,
  MarketType,
} from '@/components/TopHeader/types';
import CurrencyList from '@/components/TopHeader/CurrencyList';

type Props = {
  currentMarket?: MarketType;
  currentLanguage?: LanguageType;
  currentCurrency?: CurrencyType;
};

const LanguageSwitchDropdown: FC<Props> = ({
  currentMarket,
  currentLanguage,
  currentCurrency,
}) => {
  return (
    <div
      className="market-panel dropdown-menu dropdown-menu-right"
      aria-labelledby="dropdownMarket"
    >
      <MarketList currentMarketName={currentMarket?.name} />
      <LanguageList
        currentLanguage={currentLanguage}
        languages={currentMarket?.languages}
      />
      <CurrencyList
        currentCurrency={currentCurrency}
        currencies={currentMarket?.currencies}
      />
    </div>
  );
};

export default LanguageSwitchDropdown;
