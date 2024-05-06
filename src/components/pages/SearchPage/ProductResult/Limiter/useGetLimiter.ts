import { useMemo } from 'react';
import { PAGE_SIZES } from '@/components/pages/SearchPage/constants';

type Props = {
  current: number;
};

const useGetLimiter = ({ current }: Props) => {
  return useMemo(
    () => [
      current === PAGE_SIZES['15'] ? PAGE_SIZES['20'] : PAGE_SIZES['15'],
      current === PAGE_SIZES['30'] || current === PAGE_SIZES['35']
        ? PAGE_SIZES['20']
        : PAGE_SIZES['30'],
      current === PAGE_SIZES['30'] ? PAGE_SIZES['35'] : PAGE_SIZES['30'],
    ],
    [current],
  );
};

export default useGetLimiter;
