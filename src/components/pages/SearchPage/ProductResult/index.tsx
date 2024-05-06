import ProductResultTitle from '@/components/pages/SearchPage/ProductResult/ProductResultTitle';
import ProductFilterToolBar from '@/components/pages/SearchPage/ProductResult/ProductFilterToolBar';
import EmptyResult from '@/components/pages/SearchPage/EmptyResult';

const ProductResult = () => {
  return (
    <div className="col-lg-9">
      <ProductResultTitle />
      <ProductFilterToolBar />
      {/*While the CG doesn't have product data, I just place a mock text here*/}
      <div className="category-page__products jsProducts">
        <EmptyResult searchType="products" />
      </div>
    </div>
  );
};

export default ProductResult;
