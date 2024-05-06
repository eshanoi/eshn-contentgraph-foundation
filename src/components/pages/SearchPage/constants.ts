import { Locales, SynonymSlot } from '@/gql/schema';
import type { SearchPageQueryVariables } from '@/app/search/SearchPage.gql.g';
import type { SearchParamsQuery } from '@/utils/mutateSearchParams';

export const PAGE_SIZES = {
  10: 10,
  15: 15,
  20: 20,
  30: 30,
  35: 35,
};

export const DEFAULT_SEARCH_CRITERIA: SearchPageQueryVariables = {
  skip: 0,
  limit: PAGE_SIZES['10'],
  search: '',
  locale: Locales.En,
  contentType: 'StandardPage',
  synonyms: SynonymSlot.One,
  orderBy: {},
};

export const defaultPageSearchParamQuery: SearchParamsQuery = {
  name: 'page',
  term: '1',
};
