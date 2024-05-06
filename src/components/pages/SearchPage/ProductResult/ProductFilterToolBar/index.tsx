import ChangeViewMode from '@/components/pages/SearchPage/ProductResult/ChangeViewMode';
import Limiter from '@/components/pages/SearchPage/ProductResult/Limiter';
import SortBy from '@/components/pages/SearchPage/ProductResult/SortBy';

const ProductFilterToolBar = () => {
  return (
    <div className="row">
      <div className="col-12 toolbar">
        <div className="toolbar__left">
          <ChangeViewMode />
        </div>
        <div className="toolbar__center"></div>
        <div className="toolbar__right">
          <Limiter />
          <SortBy />
        </div>
      </div>
    </div>
  );
};

export default ProductFilterToolBar;
