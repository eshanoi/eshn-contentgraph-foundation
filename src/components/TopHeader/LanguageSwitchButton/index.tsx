'use client';

import FlagIcon from '@/components/TopHeader/FlagIcon';
import type { FC } from 'react';
import useGetCurrentMarketData from '@/components/TopHeader/hooks/useGetCurrentMarketData';

type Props = Omit<ReturnType<typeof useGetCurrentMarketData>, 'currentMarket'>;

const LanguageSwitchButton: FC<Props> = ({
  currentLanguage,
  currentCurrency,
  currentCountry,
}) => {
  return (
    <div
      className="market-selector__wrapper"
      data-bs-toggle="dropdown"
      data-offset="0, -1"
      data-flip="false"
      aria-expanded="false"
    >
      {currentCountry && <FlagIcon flagCode={currentCountry.flagCode} />}
      <p className="market-selector__market-text">
        | {currentLanguage?.code || ''} | {currentCurrency?.symbol || ''}
      </p>
      <div className="market-selector__dropdown-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitchButton;
