'use client';

import { type FC, useContext, useEffect, useRef, useState } from 'react';
import { QuickSearchContext } from '@/components/Header/SearchBar/context';
import QuickSearchResultCategory from '@/components/Header/SearchBar/QuickSearchResultCategory';
import QuickSearchNotFound from '@/components/Header/SearchBar/QuickSearchNotFound';
import QuickSearchItem from '@/components/Header/SearchBar/QuickSearchItem';

type Props = {
  isSearchBarOpen: boolean;
};

const QuickSearchResult: FC<Props> = ({ isSearchBarOpen }) => {
  const { searchData } = useContext(QuickSearchContext);
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(!!searchData);
  }, [searchData]);

  useEffect(() => {
    if (!isSearchBarOpen && open) {
      setOpen(false);
    }
  }, [isSearchBarOpen, open]);

  if (!open) return null;
  return (
    <div className="searchbox-popover" data-popper-placement="bottom" ref={ref}>
      <div className="position-relative">
        <div className="js-searchbox-content">
          <QuickSearchResultCategory title="Products">
            <QuickSearchNotFound />
          </QuickSearchResultCategory>
          <QuickSearchResultCategory title="Contents">
            {searchData?.contents?.items?.length ? (
              searchData?.contents?.items?.map((content) => {
                if (
                  !content ||
                  content.__typename !== 'StandardPage' ||
                  !content.Name
                )
                  return null;

                return (
                  <QuickSearchItem
                    key={content._id}
                    href={content.RelativePath}
                  >
                    {content.Name}
                  </QuickSearchItem>
                );
              })
            ) : (
              <QuickSearchNotFound />
            )}
          </QuickSearchResultCategory>
        </div>
      </div>
    </div>
  );
};

export default QuickSearchResult;
