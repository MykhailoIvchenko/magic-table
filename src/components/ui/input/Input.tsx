import React, { useId } from 'react';
import styles from './input.module.css';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<IInputProps> = ({ label, error, id, ...rest }) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.inputLabel}>
          {label}
        </label>
      )}
      <input id={inputId} className={styles.input} {...rest} />
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};

export default React.memo(Input);
