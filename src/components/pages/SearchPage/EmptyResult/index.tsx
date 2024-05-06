import type { FC } from 'react';

type Props = {
  searchType: string;
};

const EmptyResult: FC<Props> = ({ searchType }) => {
  return <h4>No {searchType} matched your search criteria.</h4>;
};

export default EmptyResult;
