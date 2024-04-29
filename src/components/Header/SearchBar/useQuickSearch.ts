import { useDebounce } from '@/hooks/useDebounce';
import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  QuickSearchDocument,
  type QuickSearchQuery,
} from '@/components/Header/SearchBar/QuickSearch.gql.g';
import { getCookie } from 'cookies-next';
import { MARKET_COOKIES } from '@/components/TopHeader/constants';
import { Locales } from '@/gql/schema';
import useGraphqlClient from '@/hooks/useGraphqlClient';

const useQuickSearch = (isOpen: boolean) => {
  const locale = (getCookie(MARKET_COOKIES.Language) as Locales) || Locales.En;
  const [search, setSearch] = useState<string>('');
  const [searchData, setSearchData] = useState<QuickSearchQuery | null>(null);
  const onChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  }, []);

  const client = useGraphqlClient();

  const searchTrimmed = useMemo(() => search.trim(), [search]);

  const onQuickSearch = useCallback(async () => {
    if (!searchTrimmed) return;
    const response = await client.request(QuickSearchDocument, {
      search: searchTrimmed,
      contentType: 'StandardPage',
      locale,
    });

    setSearchData(response);
  }, [client, locale, searchTrimmed]);

  const onQuickSearchDebounced = useDebounce(onQuickSearch);

  useEffect(() => {
    if (searchTrimmed) {
      onQuickSearchDebounced();
    }
  }, [onQuickSearchDebounced, searchTrimmed]);

  useEffect(() => {
    if (!isOpen && search) {
      setSearch('');
    }
  }, [isOpen, search]);

  return { search, onChange, searchData };
};

export default useQuickSearch;
