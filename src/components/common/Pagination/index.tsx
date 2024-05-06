import { type FC, useCallback, useMemo } from 'react';
import useUpdateSearchParams from '@/hooks/useUpdateSearchParams';

type Props = {
  page: number;
  total: number;
  pageSize: number;
  query?: string;
};

const Pagination: FC<Props> = ({ total, page, pageSize, query = 'page' }) => {
  const totalPageCount = useMemo(
    () => Math.ceil(total / pageSize),
    [pageSize, total],
  );

  const range = useMemo(() => {
    return Array.from({ length: totalPageCount }, (_, idx) => idx + 1);
  }, [totalPageCount]);

  const { onUpdateSearchParams } = useUpdateSearchParams();

  const onChangeLimit = useCallback(
    (term: number) => () => {
      onUpdateSearchParams([
        {
          name: query,
          term: term.toString(),
        },
      ]);
    },
    [onUpdateSearchParams, query],
  );

  return (
    <ul className="pagination">
      <li
        className={`jsChangePageContent ${page === 1 ? 'disabled' : ''}`}
        onClick={onChangeLimit(page - 1)}
      >
        <a href="#">&laquo;</a>
      </li>
      {range.map((p) => (
        <li
          key={p}
          className={`jsChangePageContent ${page === p ? 'active' : ''}`}
          onClick={onChangeLimit(p)}
        >
          <a href="#">{p}</a>
        </li>
      ))}

      <li
        className={`jsChangePageContent ${page === totalPageCount ? 'disabled' : ''}`}
        onClick={onChangeLimit(page + 1)}
      >
        <a href="#">&raquo;</a>
      </li>
    </ul>
  );
};

export default Pagination;
