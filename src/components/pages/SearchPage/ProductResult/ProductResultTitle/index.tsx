'use client';

import { useSearchParams } from 'next/navigation';

const ProductResultTitle = () => {
  const params = useSearchParams();
  const search = params.get('search');
  return (
    <div className="row jsProducts">
      <div className="col-12">
        <h2>{search}</h2>
      </div>
    </div>
  );
};

export default ProductResultTitle;
