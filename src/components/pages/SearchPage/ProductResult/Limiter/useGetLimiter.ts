import { useMemo } from 'react';
import { DEFAULT_SEARCH_CRITERIA } from '@/components/pages/SearchPage/constants';

type Props = {
  current: number;
};

const useGetLimiter = ({ current }: Props) => {
  return useMemo(() => {
    let values = [15, 30, 35];
    if (current !== DEFAULT_SEARCH_CRITERIA.limit) {
      values = [15, 20, 30, 35];
    }

    return values.filter((limit) => limit !== current);
  }, [current]);
};

export default useGetLimiter;
