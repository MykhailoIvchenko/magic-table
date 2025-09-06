import React from 'react';
import styles from './title.module.css';

interface ITitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<ITitleProps> = ({ children, className = '' }) => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};

export default React.memo(Title);
