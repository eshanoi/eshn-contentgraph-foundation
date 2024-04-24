import type { InputSize } from '@/components/common/TextField/types';

export const getInputSizeClassName = (size?: InputSize) => {
  let baseClass = 'textbox';
  if (!size) return baseClass;

  return `${baseClass}-${size}`;
};
