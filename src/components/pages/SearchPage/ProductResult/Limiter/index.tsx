'use client';

import { useSearchParams } from 'next/navigation';
import {
  DEFAULT_SEARCH_CRITERIA,
  defaultPageSearchParamQuery,
  PAGE_SIZES,
} from '@/components/pages/SearchPage/constants';
import useUpdateSearchParams from '@/hooks/useUpdateSearchParams';
import { useCallback } from 'react';
import useGetLimiter from '@/components/pages/SearchPage/ProductResult/Limiter/useGetLimiter';

const query = 'limit';

const Limiter = () => {
  const searchParams = useSearchParams();
  const limit = searchParams.get(query);
  const { onUpdateSearchParams } = useUpdateSearchParams();
  const limiter = useGetLimiter({ current: limit ? +limit : PAGE_SIZES['10'] });

  const onChangeLimit = useCallback(
    (term: string) => () => {
      onUpdateSearchParams([
        {
          name: query,
          term,
        },
        defaultPageSearchParamQuery,
      ]);
    },
    [onUpdateSearchParams],
  );

  return (
    <div className="limiter">
      <label>View: </label>
      <ul className="selection">
        <li>
          <a href="#">
            {limit || DEFAULT_SEARCH_CRITERIA.limit}
            <svg width={14} height={24}>
              <use xlinkHref={`/icons/icons.svg#chevron-down`} />
            </svg>
          </a>
          <ul className="selection__dropdown">
            {limiter.map((item, index) => (
              <li key={index}>
                <a
                  className="jsPageSize jsUpdatePage"
                  href="#"
                  onClick={onChangeLimit(item.toString())}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Limiter;
