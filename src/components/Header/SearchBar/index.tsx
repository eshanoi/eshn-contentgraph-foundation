'use client';
import { SearchIcon } from '@/components/Header/UtilityIcons';
import type { FC } from 'react';
import QuickSearchForm from '@/components/Header/SearchBar/QuickSearchForm';
import QuickSearchProvider from '@/components/Header/SearchBar/context';
import QuickSearchResult from '@/components/Header/SearchBar/QuickSearchResult';

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
  className?: string;
};

const SearchBar: FC<Props> = ({ isOpen, onClose, className = '' }) => {
  return (
    <QuickSearchProvider isOpen={isOpen}>
      <div
        className={`searchbox ${className}`}
        style={{
          width: isOpen ? 324 : 80,
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="icon-left">
          <SearchIcon />
        </div>
        <QuickSearchForm />
        <div className="icon-right">
          <svg width={24} height={24} className="feather">
            <use xlinkHref={`/icons/headers.svg#camera`} />
          </svg>
          <svg
            width={24}
            height={24}
            className="feather"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <use xlinkHref={`/icons/headers.svg#cross`} />
          </svg>
        </div>
      </div>
      <QuickSearchResult isSearchBarOpen={isOpen} />
    </QuickSearchProvider>
  );
};

export default SearchBar;
