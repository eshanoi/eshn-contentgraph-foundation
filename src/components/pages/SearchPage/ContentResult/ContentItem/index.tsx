import type { FC } from 'react';
import Link from 'next/link';

type Props = {
  href: string | null;
  name: string | null;
  teaserText: string | null;
};

const ContentItem: FC<Props> = ({ teaserText, name, href }) => {
  return (
    <Link href={href || '#'} className="list-group--header__item d-flex">
      <div className="col-12 content__item">
        <b className="title">{name}</b>
        <div className="sub-title">
          <p>{teaserText}</p>
        </div>
      </div>
    </Link>
  );
};

export default ContentItem;
