import {
  type ChangeEvent,
  createContext,
  type FC,
  type ReactNode,
} from 'react';
import type { QuickSearchQuery } from '@/components/Header/SearchBar/QuickSearch.gql.g';
import useQuickSearch from '@/components/Header/SearchBar/useQuickSearch';

export type QuickSearchContext = {
  search: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchData: QuickSearchQuery | null;
};

export const QuickSearchContext = createContext<QuickSearchContext>({
  searchData: null,
  search: '',
  onChange: () => {},
});

type Props = {
  children: ReactNode;
  isOpen: boolean;
};

const QuickSearchProvider: FC<Props> = ({ children, isOpen }) => {
  const { searchData, search, onChange } = useQuickSearch(isOpen);
  return (
    <QuickSearchContext.Provider value={{ searchData, onChange, search }}>
      {children}
    </QuickSearchContext.Provider>
  );
};

export default QuickSearchProvider;
