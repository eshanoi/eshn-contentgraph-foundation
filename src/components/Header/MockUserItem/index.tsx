import Link from 'next/link';
import type { MockUserType } from '@/components/Header/types';
import type { FC } from 'react';

type Props = {
  user: MockUserType;
};

const MockUserItem: FC<Props> = ({ user }) => {
  return (
    <Link href={user.href} className="list-group--header__item">
      <p>{user.name}</p>
      <p className="sub-title">{user.description}</p>
    </Link>
  );
};

export default MockUserItem;
