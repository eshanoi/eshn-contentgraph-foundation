import {
  type FC,
  type LabelHTMLAttributes,
  type SelectHTMLAttributes,
  useId,
} from 'react';
import FieldLabel from '@/components/common/FieldLabel';
import type { SelectOption } from '@/components/common/Select/types';

type Props = {
  options: SelectOption[];
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
  selectProps: SelectHTMLAttributes<HTMLSelectElement>;
};

const Select: FC<Props> = ({ options, selectProps, labelProps }) => {
  const id = useId();
  return (
    <>
      <FieldLabel fieldId={`${selectProps.id}-${id}`} {...labelProps} />
      <select
        {...selectProps}
        id={`${selectProps.id}-${id}`}
        className="select-menu"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
