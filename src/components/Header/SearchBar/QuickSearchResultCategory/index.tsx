import type { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const QuickSearchResultCategory: FC<Props> = ({ title, children }) => {
  return (
    <ul className="style-list-none">
      <li className="searchbox__row searchbox__heading">
        <b>{title}</b>
      </li>
      {children}
    </ul>
  );
};

export default QuickSearchResultCategory;
