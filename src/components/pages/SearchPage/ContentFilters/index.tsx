const ContentFilters = () => {
  return (
    <div className="col-lg-3">
      <div className="bblock block-layered-nav jsSearchFacets">
        <div className="selection--cm__label">Content Filters</div>
        <ul className="selection--cm">
          <li className="selection--cm__inline-item">
            Filtered by: <label className="content-filters-tag">All</label>
          </li>
          <li className="">
            <span className="selection--cm__sub-label">
              <a href="#">All (0)</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentFilters;
