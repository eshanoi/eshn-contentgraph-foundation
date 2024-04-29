import { goToSearchPage } from '@/components/Header/SearchBar/goToSearchPage.action';
import { useContext } from 'react';
import { QuickSearchContext } from '@/components/Header/SearchBar/context';

const QuickSearchForm = () => {
  const { search, onChange } = useContext(QuickSearchContext);
  return (
    <form action={goToSearchPage} className="quick-search-form">
      <input
        value={search}
        className="js-searchbox-input jsSearchText"
        placeholder="Search"
        type="text"
        name="search"
        onChange={onChange}
      />
    </form>
  );
};

export default QuickSearchForm;
