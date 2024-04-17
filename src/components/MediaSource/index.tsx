import type { ComponentProps, FC } from 'react';
import { convertStaticFileHost } from '@/utils/convertStaticFileHost';

const MediaSource: FC<ComponentProps<'source'>> = ({ src, ...rest }) => {
  return <source {...rest} src={convertStaticFileHost(src)} />;
};

export default MediaSource;
