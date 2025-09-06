import React from 'react';
import TableCell from '@/components/table/tableCell/TableCell';
import styles from './headerCell.module.css';

interface HeaderCellProps {
  text: string;
}

const HeaderCell: React.FC<HeaderCellProps> = ({ text }) => {
  return (
    <TableCell>
      <strong className={styles.headerCell}>{text}</strong>
    </TableCell>
  );
};

export default React.memo(HeaderCell);
