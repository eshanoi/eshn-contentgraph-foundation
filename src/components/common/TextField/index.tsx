import {
  type FC,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  useId,
} from 'react';
import type { InputSize } from '@/components/common/TextField/types';
import { getInputSizeClassName } from '@/components/common/TextField/getInputSizeClassName';
import FieldLabel from '@/components/common/FieldLabel';

export type TextFieldProps = {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
  size?: InputSize;
};

const TextField: FC<TextFieldProps> = ({ labelProps, inputProps, size }) => {
  const id = useId();
  return (
    <>
      <FieldLabel
        {...labelProps}
        fieldId={`${inputProps.id}-${id}`}
        className="label"
      />
      <input
        {...inputProps}
        id={`${inputProps.id}-${id}`}
        className={getInputSizeClassName(size)}
      />
      <span className="field-validation-valid" />
    </>
  );
};

export default TextField;
