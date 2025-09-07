import React from 'react';
import TableCell from '@/components/table/tableCell/TableCell';
import styles from './headerCell.module.css';

interface HeaderCellProps {
  text: string;
  isFirstCol?: boolean;
}

const HeaderCell: React.FC<HeaderCellProps> = ({ text, isFirstCol }) => {
  return (
    <TableCell isFirstRow isFirstCol={isFirstCol}>
      <strong className={styles.headerCell}>{text}</strong>
    </TableCell>
  );
};

export default React.memo(HeaderCell);
