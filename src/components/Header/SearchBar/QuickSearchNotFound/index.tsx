import QuickSearchItem from '@/components/Header/SearchBar/QuickSearchItem';

const QuickSearchNotFound = () => {
  return (
    <QuickSearchItem>
      <p className="searchbox__notfound">No result found.</p>
    </QuickSearchItem>
  );
};

export default QuickSearchNotFound;
