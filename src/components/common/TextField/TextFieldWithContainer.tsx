import TextFieldContainer from '@/components/common/TextFieldContainer';
import TextField, {
  type TextFieldProps,
} from '@/components/common/TextField/index';
import type { FC } from 'react';

type Props = TextFieldProps;

const TextFieldWithContainer: FC<Props> = ({
  labelProps,
  inputProps,
  size,
}) => {
  return (
    <TextFieldContainer>
      <TextField inputProps={inputProps} labelProps={labelProps} size={size} />
    </TextFieldContainer>
  );
};

export default TextFieldWithContainer;
