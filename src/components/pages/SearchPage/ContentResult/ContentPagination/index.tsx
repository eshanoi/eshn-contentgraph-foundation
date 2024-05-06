'use client';

import Pagination from '@/components/common/Pagination';
import { useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import { DEFAULT_SEARCH_CRITERIA } from '@/components/pages/SearchPage/constants';

type Props = {
  total: number;
};

const ContentPagination: FC<Props> = ({ total }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const limit =
    searchParams.get('limit') || (DEFAULT_SEARCH_CRITERIA.limit as number);

  return <Pagination page={+page} total={total} pageSize={+limit} />;
};

export default ContentPagination;
