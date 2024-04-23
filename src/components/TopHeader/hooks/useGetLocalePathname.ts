'use client';

import { usePathname } from 'next/navigation';

const useGetLocalePathname = () => {
  const pathName = usePathname();
  const getLocalePathname = (locale?: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    if (locale) {
      segments[1] = locale;
    }
    return segments.join('/');
  };

  return { getLocalePathname };
};

export default useGetLocalePathname;
