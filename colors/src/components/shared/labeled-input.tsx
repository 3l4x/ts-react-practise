import clsx from 'clsx';
import { ChangeEventHandler, ComponentPropsWithoutRef, useId } from 'react';

type LabeledInputProps = {
  label: string;
} & ComponentPropsWithoutRef<'input'>;

const LabeledInput = ({
  id,
  label,
  onChange,
  ...props
}: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        readOnly={!onChange}
        {...props}
      />
    </div>
  );
};

export default LabeledInput;
