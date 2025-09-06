import React from 'react';
import styles from './loader.module.css';

interface ILoaderProps {
  rows?: number;
  columns?: number;
  className?: string;
}

const Loader: React.FC<ILoaderProps> = ({
  rows = 3,
  columns = 3,
  className = '',
}) => {
  const skeletonRows = Array.from({ length: rows });
  const skeletonColumns = Array.from({ length: columns });

  return (
    <div className={`${styles.loader} ${className}`}>
      {skeletonRows.map((_, rowIdx) => (
        <div key={rowIdx} className={styles.row}>
          {skeletonColumns.map((_, colIdx) => (
            <div key={colIdx} className={styles.cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Loader);
