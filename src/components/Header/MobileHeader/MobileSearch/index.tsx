'use client';
import UtilityIconContainer from '@/components/Header/UtilityIconContainer';
import { SearchIcon } from '@/components/Header/UtilityIcons';
import useHandleSearchBarVisible from '@/components/Header/SearchBar/useHandleSearchBarVisible';
import SearchBar from '@/components/Header/SearchBar';

const MobileSearch = () => {
  const { ref, onOpenSearchBar, isSearchBarOpen, onCloseSearchBar } =
    useHandleSearchBarVisible();

  return (
    <div
      className="mobile-navigation__right"
      onClick={onOpenSearchBar}
      ref={ref}
    >
      <UtilityIconContainer Icon={<SearchIcon />} className="icon-menu" />
      <SearchBar
        isOpen={isSearchBarOpen}
        onClose={onCloseSearchBar}
        className="searchbox-mobile"
      />
    </div>
  );
};

export default MobileSearch;
