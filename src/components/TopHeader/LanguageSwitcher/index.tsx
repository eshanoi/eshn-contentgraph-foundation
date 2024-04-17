'use client';

import dynamic from 'next/dynamic';
import useGetCurrentMarketData from '@/components/TopHeader/hooks/useGetCurrentMarketData';

// While we're using cookies in CSR, it's necessary to disable prerendering of these components using these cookies or hydration error will occur
// because default market in SSR might be different from current market in CSR
// FYI: https://nextjs.org/docs/messages/react-hydration-error#solution-2-disabling-ssr-on-specific-components
const LanguageSwitchButton = dynamic(() => import('../LanguageSwitchButton'), {
  ssr: false,
});

const LanguageSwitchDropdown = dynamic(
  () => import('../LanguageSwitchDropdown'),
  {
    ssr: false,
  },
);

const LanguageSwitcher = () => {
  const { currentLanguage, currentCountry, currentCurrency, currentMarket } =
    useGetCurrentMarketData();

  return (
    <div className="market-selector dropdown display-none d-lg-block">
      <LanguageSwitchButton
        currentLanguage={currentLanguage}
        currentCountry={currentCountry}
        currentCurrency={currentCurrency}
      />
      <LanguageSwitchDropdown
        currentLanguage={currentLanguage}
        currentMarket={currentMarket}
        currentCurrency={currentCurrency}
      />
    </div>
  );
};

export default LanguageSwitcher;
