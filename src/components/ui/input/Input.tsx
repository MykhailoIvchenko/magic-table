import React, { useId } from 'react';
import styles from './input.module.css';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isRow?: boolean;
  inputClassName?: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  error,
  isRow = false,
  id,
  inputClassName,
  ...rest
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const wrapperClasses = `${styles.inputWrapper} ${isRow ? styles.asRow : ''}`;

  const inputClasses = `${styles.input} ${inputClassName}`;

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={inputId} className={styles.inputLabel}>
          {label}
        </label>
      )}

      <input id={inputId} className={inputClasses} {...rest} />

      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};

export default React.memo(Input);
