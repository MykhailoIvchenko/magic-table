import React from 'react';
import styles from './button.module.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'icon' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) => {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default React.memo(Button);
