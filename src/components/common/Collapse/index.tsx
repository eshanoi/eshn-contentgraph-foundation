import type { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  name: string;
  children: ReactNode;
  id: string;
  href?: string;
  className?: string;
};

const Collapse: FC<Props> = ({
  name,
  children,
  id,
  className = '',
  href = '#',
}) => {
  return (
    <li className={className}>
      <Link
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="true"
        aria-controls={id}
        className={`collapse-toggle collapsed`}
        href={href}
      >
        <span>{name}</span>
      </Link>
      <div className="collapse" id={id}>
        {children}
      </div>
    </li>
  );
};

export default Collapse;
