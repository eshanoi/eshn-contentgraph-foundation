const ChangeViewMode = () => {
  return (
    <div className="view-mode">
      <span
        title="Grid"
        className="view-button button-active button-grid jsViewMode jsUpdatePage"
      >
        <svg width={24} height={24}>
          <use xlinkHref={`/icons/icons.svg#grid`} />
        </svg>
      </span>

      <span
        title="List"
        className="view-button button-list jsViewMode jsUpdatePage"
      >
        <svg width={24} height={24}>
          <use xlinkHref={`/icons/icons.svg#list`} />
        </svg>
      </span>
    </div>
  );
};

export default ChangeViewMode;
