type MarketCommonFields = {
  name: string;
  code: string;
};

export type CountryType = {
  flagCode: string;
} & Pick<MarketCommonFields, 'name'>;

export type CurrencyType = {
  isDefault?: boolean;
  symbol: string;
} & MarketCommonFields;

export type LanguageType = {
  isDefault?: boolean;
} & MarketCommonFields;

export type MarketType = {
  id: string;
  description?: string;
  languages: LanguageType[];
  countries: CountryType[];
  currencies: CurrencyType[];
  isDefault?: boolean;
} & Pick<MarketCommonFields, 'name'>;
