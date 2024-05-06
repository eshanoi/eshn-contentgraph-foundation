import { ReadonlyURLSearchParams } from 'next/navigation';

export type SearchParamsQuery = {
  name: string;
  term: string;
};

type Props = {
  queries: SearchParamsQuery[];
  currentParams: ReadonlyURLSearchParams;
};

export const mutateSearchParams = ({ queries, currentParams }: Props) => {
  const params = new URLSearchParams(currentParams);
  queries.forEach((query) => {
    if (query.term) {
      params.set(query.name, query.term.toString());
    } else {
      params.delete(query.name);
    }
  });

  return params;
};
