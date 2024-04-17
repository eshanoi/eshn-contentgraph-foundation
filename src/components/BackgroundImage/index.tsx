import type { ComponentProps, FC } from 'react';
import { convertStaticFileHost } from '@/utils/convertStaticFileHost';

type Props = {
  url: string;
} & ComponentProps<'div'>;

const BackgroundImage: FC<Props> = ({ url, ...props }) => {
  return (
    <div
      {...props}
      style={{
        backgroundImage: `url('${convertStaticFileHost(url)}')`,
      }}
    ></div>
  );
};

export default BackgroundImage;
