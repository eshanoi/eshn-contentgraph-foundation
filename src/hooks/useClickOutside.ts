import { type RefObject, useEffect } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside: Function,
) => {
  useEffect(() => {
    function handleClickOutside(this: Document, event: globalThis.MouseEvent) {
      const target = event.target as Element;
      if (ref.current && !ref.current.contains(target)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
