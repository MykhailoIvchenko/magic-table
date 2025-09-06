import React from 'react';
import styles from './button.module.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}) => {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default React.memo(Button);
