import type {
  ListItem,
  NestedListType,
} from '@/components/common/NestedList/types';
import type { FC, ReactNode } from 'react';

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
            <>
              <Item item={item} key={`${item.name}-${list.title}`} />
              {item.items && (
                <>
                  {item.items.map((nestedItem) => (
                    <NestedList
                      key={`${nestedItem.title}-${list.title}`}
                      list={nestedItem}
                      Item={Item}
                      Title={Title}
                      className="nested-list__child"
                    />
                  ))}
                </>
              )}
            </>
          );
        })}
    </ul>
  );
};

export default NestedList;
