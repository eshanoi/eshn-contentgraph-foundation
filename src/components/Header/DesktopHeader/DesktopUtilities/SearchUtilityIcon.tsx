'use client';
import { type FC, type ReactNode } from 'react';
import type { Utility } from '@/components/Header/types';
import DesktopUtilityIcon from '@/components/Header/DesktopHeader/DesktopUtilities/DesktopUtilityIcon';
import useHandleSearchBarVisible from '@/components/Header/SearchBar/useHandleSearchBarVisible';
import SearchBar from '@/components/Header/SearchBar';

type Props = {
  children: ReactNode;
  utility: Utility;
};

const SearchUtilityIcon: FC<Props> = ({ utility, children }) => {
  const { ref, onOpenSearchBar, isSearchBarOpen, onCloseSearchBar } =
    useHandleSearchBarVisible();

  return (
    <div ref={ref} onClick={onOpenSearchBar}>
      <div style={{ display: isSearchBarOpen ? 'none' : 'flex' }}>
        <DesktopUtilityIcon utility={utility}>{children}</DesktopUtilityIcon>
      </div>
      <SearchBar isOpen={isSearchBarOpen} onClose={onCloseSearchBar} />
    </div>
  );
};

export default SearchUtilityIcon;
