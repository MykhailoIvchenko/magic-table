import React from 'react';
import TableCell from '@/components/table/tableCell/TableCell';
import styles from './aggregateCell.module.css';

interface AggregateCellProps {
  value: number;
  rowIndex: number;
  onHoverRow?: (rowIndex: number) => void;
}

const AggregateCell: React.FC<AggregateCellProps> = ({
  value,
  rowIndex,
  onHoverRow,
}) => {
  return (
    <TableCell>
      <div
        className={styles.aggregateCell}
        onMouseEnter={() => onHoverRow?.(rowIndex)}
        onMouseLeave={() => onHoverRow?.(-1)}
      >
        <span>{value}</span>
      </div>
    </TableCell>
  );
};

export default React.memo(AggregateCell);
