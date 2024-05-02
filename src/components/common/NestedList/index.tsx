import type {
  ListItem,
  NestedListType,
} from '@/components/common/NestedList/types';
import { type FC, Fragment, type ReactNode } from 'react';

type Props = {
  list: NestedListType;
  Item: ({ item }: { item: ListItem }) => ReactNode;
  className?: string;
  Title?: ({ title }: { title: string }) => ReactNode;
};

const NestedList: FC<Props> = ({ list, Item, Title, className = '' }) => {
  return (
    <ul className={`nested-list ${className}`}>
      {list.title && Title && <Title title={`${list.title}`} />}
      {list.items &&
        list?.items.map((item) => {
          return (
            <Fragment key={`${item.name}-${list.title}-${item.href}`}>
              <Item item={item} />
              {item.items && (
                <>
                  {item.items.map((nestedItem) => {
                    return (
                      <NestedList
                        key={`${nestedItem.title}-${list.title}-$${item.href}`}
                        list={nestedItem}
                        Item={Item}
                        Title={Title}
                        className="nested-list__child"
                      />
                    );
                  })}
                </>
              )}
            </Fragment>
          );
        })}
    </ul>
  );
};

export default NestedList;
