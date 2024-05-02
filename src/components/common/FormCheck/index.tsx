import {
  type FC,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  useId,
} from 'react';
import FieldLabel from '@/components/common/FieldLabel';

type Props = {
  inputProps: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
};

const FormCheck: FC<Props> = ({ labelProps, inputProps }) => {
  const id = useId();
  return (
    <div className="form-check">
      <input
        {...inputProps}
        id={`${inputProps.id}-${id}`}
        className="form-check-input"
        type="checkbox"
        value="true"
      />
      <FieldLabel
        {...labelProps}
        fieldId={`${inputProps.id}-${id}`}
        className="form-check-label"
      />
    </div>
  );
};

export default FormCheck;
