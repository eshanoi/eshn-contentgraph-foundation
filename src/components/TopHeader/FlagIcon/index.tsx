import type { FC } from 'react';

type Props = {
  flagCode: string;
};

const FlagIcon: FC<Props> = ({ flagCode }) => {
  return (
    <svg
      width={16}
      height={16}
      className="market-selector__market-icon ls-is-cached lazyloaded"
    >
      <use xlinkHref={`/icons/flags.svg#${flagCode}`} />
    </svg>
  );
};

export default FlagIcon;
