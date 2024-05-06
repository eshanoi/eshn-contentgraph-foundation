const Categories = () => {
  return (
    <div className="category-page__facets col-lg-3 jsFacets">
      <div className="selection--cm__label"> Categories</div>
      <ul className="selection--cm" id="jsCategoriesFilter"></ul>

      <div className="selection-wrapper bblock block-layered-nav jsSearchFacets">
        <div className="selection--cm__label block-title">Shop By</div>
        <div className="block-content"></div>
      </div>
    </div>
  );
};

export default Categories;
