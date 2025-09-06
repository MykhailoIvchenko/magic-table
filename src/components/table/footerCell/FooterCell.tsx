import React from 'react';
import TableCell from '@/components/table/tableCell/TableCell';
import styles from './footerCell.module.css';

interface FooterCellProps {
  value: string | number;
  isFirstCol?: boolean;
}

const FooterCell: React.FC<FooterCellProps> = ({ value, isFirstCol }) => {
  return (
    <TableCell isFirstCol={isFirstCol}>
      <span className={styles.footerCell}>{value}</span>
    </TableCell>
  );
};

export default React.memo(FooterCell);
