'use client';

import type { FC } from 'react';
import { MARKETS } from '@/components/TopHeader/constants';
import FlagIcon from '@/components/TopHeader/FlagIcon';
import useChangeMarketData from '@/components/TopHeader/hooks/useChangeMarketData';
import useGetLocalePathname from '@/components/TopHeader/hooks/useGetLocalePathname';

type Props = {
  currentMarketName?: string;
};

const MarketList: FC<Props> = ({ currentMarketName }) => {
  const { onChangeMarket } = useChangeMarketData();
  const { getLocalePathname } = useGetLocalePathname();

  return (
    <div className="market-list">
      <div className="market-list__label">
        <span>Market: {currentMarketName}</span>
      </div>
      <div className="market-list__list">
        {MARKETS.map((market) => (
          <a
            key={market.id}
            href={getLocalePathname(
              market.languages.find((language) => language.isDefault)?.code,
            )}
            className="market-selector__wrapper"
            onClick={() => onChangeMarket(market.id)}
          >
            <FlagIcon flagCode={market.countries[0].flagCode} />
            <p className="market-selector__market-text">{market.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MarketList;
