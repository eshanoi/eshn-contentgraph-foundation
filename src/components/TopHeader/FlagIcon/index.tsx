import type { FC } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  countryName: string;
};

const FlagIcon: FC<Props> = ({ src, countryName }) => {
  return (
    <Image
      width={16}
      height={16}
      className="market-selector__market-icon ls-is-cached lazyloaded"
      data-src={src}
      src={src}
      alt={`${countryName} flag`}
    />
  );
};

export default FlagIcon;
