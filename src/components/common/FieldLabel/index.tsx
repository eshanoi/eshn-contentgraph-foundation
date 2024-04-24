import type { FC, LabelHTMLAttributes } from 'react';

type Props = {
  fieldId?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

const FieldLabel: FC<Props> = ({ fieldId, ...props }) => {
  return (
    <label {...props} htmlFor={fieldId}>
      {props.children}
    </label>
  );
};

export default FieldLabel;
