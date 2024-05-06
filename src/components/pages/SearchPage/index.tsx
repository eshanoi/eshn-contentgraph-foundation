import ProductResult from '@/components/pages/SearchPage/ProductResult';
import Categories from '@/components/pages/SearchPage/Categories';
import ContentFilters from '@/components/pages/SearchPage/ContentFilters';
import ContentResult from '@/components/pages/SearchPage/ContentResult';
import type { FC } from 'react';
import type { SearchPageQuery } from '@/app/search/SearchPage.gql.g';

type Props = {
  response: SearchPageQuery;
};

const SearchPage: FC<Props> = ({ response }) => {
  return (
    <div className="category-page">
      <div className="row">
        <Categories />
        <ProductResult />
      </div>
      <br />
      <div className="row">
        <ContentFilters />
        <ContentResult response={response} />
      </div>
    </div>
  );
};

export default SearchPage;
