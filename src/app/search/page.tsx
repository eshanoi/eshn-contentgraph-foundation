import client from '@/lib/gql/client';
import { type InputMaybe, Locales, OrderBy } from '@/gql/schema';
import { DEFAULT_SEARCH_CRITERIA } from '@/components/pages/SearchPage/constants';
import SearchPage from '@/components/pages/SearchPage';
import {
  SearchPageDocument,
  type SearchPageQueryVariables,
} from '@/app/search/SearchPage.gql.g';
import { undefined } from 'zod';

export default async function Page({
  params: { locale },

  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { locale: string };
}) {
  const { search, limit, page, sort, sortDirection, ...rest } = searchParams;
  const limitArg = limit
    ? +(limit as string)
    : (DEFAULT_SEARCH_CRITERIA.limit as number);
  const pageArg = page ? +page : (DEFAULT_SEARCH_CRITERIA.skip as number);

  const variables: SearchPageQueryVariables = {
    search: (search as InputMaybe<string>) || DEFAULT_SEARCH_CRITERIA.search,
    contentType: DEFAULT_SEARCH_CRITERIA.contentType,
    synonyms: DEFAULT_SEARCH_CRITERIA.synonyms,
    limit: limit ? +(limit as string) : DEFAULT_SEARCH_CRITERIA.limit,
    locale: locale ? (locale as Locales) : DEFAULT_SEARCH_CRITERIA.locale,
    skip: pageArg === 0 ? 0 : (pageArg - 1) * limitArg,
    orderBy: {
      ...rest,
      ...(sort
        ? { [sort as string]: sortDirection || OrderBy.Asc }
        : undefined),
    },
  };

  const response = await client.request(SearchPageDocument, variables);

  return <SearchPage response={response} />;
}
