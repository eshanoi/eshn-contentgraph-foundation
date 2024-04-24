import type { HeaderItemContent, LogoType } from '@/components/Header/types';
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  content: HeaderItemContent;
};

const Logo: FC<Props> = ({ content }) => {
  const logo = content as LogoType;
  return (
    <Link href="/">
      <picture className="img-fluid">
        <source srcSet={logo.src} />
        <Image
          className="img-fluid"
          width="164"
          height="33"
          src={logo.src}
          alt="logo"
        />
      </picture>
    </Link>
  );
};

export default Logo;
