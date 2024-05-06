import {
  mutateSearchParams,
  type SearchParamsQuery,
} from '@/utils/mutateSearchParams';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useUpdateSearchParams = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const onUpdateSearchParams = useCallback(
    (queries: SearchParamsQuery[]) => {
      const newParams = mutateSearchParams({
        queries,
        currentParams: searchParams,
      });
      replace(`${pathname}?${newParams.toString()}`);
    },
    [pathname, replace, searchParams],
  );

  return { onUpdateSearchParams };
};

export default useUpdateSearchParams;
