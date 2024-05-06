'use client';

import { useSearchParams } from 'next/navigation';
import useUpdateSearchParams from '@/hooks/useUpdateSearchParams';
import { useCallback, useMemo } from 'react';
import { OrderBy } from '@/gql/schema';
import { defaultPageSearchParamQuery } from '@/components/pages/SearchPage/constants';

const sort = 'sort';
const sortDirection = 'sortDirection';

const SortBy = () => {
  const searchParams = useSearchParams();
  const sortQuery = searchParams.get(sort);
  const sortDirectionQuery = searchParams.get(sortDirection) as OrderBy;
  const { onUpdateSearchParams } = useUpdateSearchParams();

  const isDescDirection = useMemo(
    () => sortDirectionQuery === OrderBy.Desc,
    [sortDirectionQuery],
  );

  const onChangeSortBy = useCallback(
    (term: string) => () => {
      onUpdateSearchParams([{ name: sort, term }, defaultPageSearchParamQuery]);
    },
    [onUpdateSearchParams],
  );

  const onChangeSortDirection = useCallback(() => {
    onUpdateSearchParams([
      {
        name: sortDirection,
        term: isDescDirection ? OrderBy.Asc : OrderBy.Desc,
      },
      defaultPageSearchParamQuery,
    ]);
  }, [isDescDirection, onUpdateSearchParams]);

  return (
    <div className="sort-by">
      <label className="left">Sort By: </label>
      <ul className="selection">
        <li>
          <a href="#">
            {sortQuery || 'Position'}
            <svg width={14} height={24}>
              <use xlinkHref={`/icons/icons.svg#chevron-down`} />
            </svg>
          </a>
          <ul className="selection__dropdown">
            {/*For now, only "Name" is work*/}
            <li>
              <a
                href="#"
                className="jsSort jsUpdatePage"
                onClick={onChangeSortBy('Name')}
              >
                Name
              </a>
            </li>
            <li>
              <a href="#" className="jsSort jsUpdatePage">
                Price
              </a>
            </li>
            <li>
              <a href="#" className="jsSort jsUpdatePage">
                Position
              </a>
            </li>
            <li>
              <a href="#" className="jsSort jsUpdatePage">
                Recommended
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <a
        className="left box-sort jsSortDirection jsUpdatePage"
        title="Set Descending Direction)"
        href="#"
        onClick={onChangeSortDirection}
      >
        <svg width={24} height={24}>
          <use
            xlinkHref={`/icons/icons.svg#arrow-${isDescDirection ? 'up' : 'down'}`}
          />
        </svg>
      </a>
    </div>
  );
};

export default SortBy;
