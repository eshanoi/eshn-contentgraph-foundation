import { useDebounce } from '@/hooks/useDebounce';
import { type ChangeEvent, useCallback, useEffect, useState } from 'react';
import client from '@/lib/gql/client';
import {
  QuickSearchDocument,
  type QuickSearchQuery,
} from '@/components/Header/SearchBar/QuickSearch.gql.g';
import { getCookie } from 'cookies-next';
import { MARKET_COOKIES } from '@/components/TopHeader/constants';

const useQuickSearch = (isOpen: boolean) => {
  const language = getCookie(MARKET_COOKIES.Language) || 'en';
  const [search, setSearch] = useState<string>('');
  const [searchData, setSearchData] = useState<QuickSearchQuery | null>(null);

  const onChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  }, []);

  const onQuickSearch = useCallback(async () => {
    if (!search) return;
    const response = await client.request(QuickSearchDocument, {
      search,
      contentType: 'StandardPage',
      language,
    });

    setSearchData(response);
  }, [language, search]);

  const onQuickSearchDebounced = useDebounce(onQuickSearch);

  useEffect(() => {
    if (search) {
      onQuickSearchDebounced();
    }
  }, [onQuickSearchDebounced, search]);

  useEffect(() => {
    if (!isOpen && search) {
      setSearch('');
    }
  }, [isOpen, search]);

  return { search, onChange, searchData };
};

export default useQuickSearch;
