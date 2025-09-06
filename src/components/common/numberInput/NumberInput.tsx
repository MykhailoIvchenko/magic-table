import React from 'react';
import Input from '@/components/ui/input/Input';

interface INumberInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'type'
  > {
  label?: string;
  error?: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const NumberInput: React.FC<INumberInputProps> = ({
  label,
  error,
  min,
  max,
  value,
  onChange,
  ...rest
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;

    if (newValue === '') {
      onChange?.(NaN);
      return;
    }

    let num = Number(newValue);
    if (isNaN(num)) return;

    if (min !== undefined && num < min) num = min;
    if (max !== undefined && num > max) num = max;

    onChange?.(num);
  };

  return (
    <Input
      label={label}
      error={error}
      type='number'
      value={value ?? ''}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default React.memo(NumberInput);
