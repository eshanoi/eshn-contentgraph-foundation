import { useCallback, useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

const useHandleSearchBarVisible = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

  const onCloseSearchBar = useCallback(() => {
    setIsSearchBarOpen(false);
  }, []);

  const onOpenSearchBar = useCallback(() => {
    setIsSearchBarOpen(true);
  }, []);

  useClickOutside(ref, onCloseSearchBar);
  return { ref, isSearchBarOpen, onOpenSearchBar, onCloseSearchBar };
};

export default useHandleSearchBarVisible;
