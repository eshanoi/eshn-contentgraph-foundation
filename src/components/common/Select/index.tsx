import type { FC, LabelHTMLAttributes, SelectHTMLAttributes } from 'react';
import FieldLabel from '@/components/common/FieldLabel';
import type { SelectOption } from '@/components/common/Select/types';

type Props = {
  options: SelectOption[];
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
  selectProps: SelectHTMLAttributes<HTMLLabelElement>;
};

const Select: FC<Props> = ({ options, selectProps, labelProps }) => {
  return (
    <>
      <FieldLabel fieldId={selectProps.id} {...labelProps} />
      <select className="select-menu">
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
