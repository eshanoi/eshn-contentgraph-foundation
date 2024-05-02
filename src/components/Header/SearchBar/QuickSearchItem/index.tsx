import type { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  href?: string | null;
};

const QuickSearchItem: FC<Props> = ({ children, href }) => {
  return (
    <li className="searchbox__row">
      {href ? (
        <Link href={href || '#'} className="searchbox__product-name">
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </li>
  );
};

export default QuickSearchItem;
