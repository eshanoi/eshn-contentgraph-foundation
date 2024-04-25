import type { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import FieldLabel from '@/components/common/FieldLabel';

type Props = {
  inputProps: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
};

const FormCheck: FC<Props> = ({ labelProps, inputProps }) => {
  return (
    <div className="form-check">
      <input
        {...inputProps}
        className="form-check-input"
        type="checkbox"
        value="true"
      />
      <FieldLabel
        {...labelProps}
        fieldId={inputProps.id}
        className="form-check-label"
      />
    </div>
  );
};

export default FormCheck;
