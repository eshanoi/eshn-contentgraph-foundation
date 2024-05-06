import type { SearchPageQuery } from '@/app/search/SearchPage.gql.g';
import type { FC } from 'react';
import ContentPagination from '@/components/pages/SearchPage/ContentResult/ContentPagination';
import ContentItem from '@/components/pages/SearchPage/ContentResult/ContentItem';
import EmptyResult from '@/components/pages/SearchPage/EmptyResult';

type Props = {
  response: SearchPageQuery;
};

const ContentResult: FC<Props> = ({ response }) => {
  return (
    <div className="col-lg-9">
      <div className="row">
        <div className="col-12" id="contentResult">
          <div>
            <h2>Content</h2>
          </div>
          {response.contents?.items?.length ? (
            <>
              <div className="list-group--header content-search-results">
                {response.contents?.items?.map(
                  (item) =>
                    item?.__typename === 'StandardPage' && (
                      <ContentItem
                        key={item._id}
                        href={item.RelativePath}
                        name={item.Name}
                        teaserText={item.TeaserText}
                      />
                    ),
                )}
              </div>
              <div>
                <ContentPagination total={response.contents?.total as number} />
              </div>
            </>
          ) : (
            <EmptyResult searchType="contents" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentResult;
