import type { FC } from 'react';

export type TabType = {
  id: string;
  name: string;
  content: FC;
  defaultActive?: boolean;
};
