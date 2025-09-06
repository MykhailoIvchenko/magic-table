import React from 'react';
import HeaderCell from '@/components/table/headerCell/HeaderCell';
import styles from './tableHeader.module.css';

interface TableHeaderProps {
  columns: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <div className={styles.row}>
      {columns.map((col, index) => (
        <HeaderCell key={index} text={col} />
      ))}
    </div>
  );
};

export default React.memo(TableHeader);
