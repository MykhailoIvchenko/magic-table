import React from 'react';
import TableCell from '@/components/table/tableCell/TableCell';
import styles from './aggregateCell.module.css';
import TrashIcon from '@/assets/img/icons/trash-icon.svg?react';

interface AggregateCellProps {
  value: number;
  rowIndex: number;
  onHoverRow?: (rowIndex: number) => void;
  onDeleteRow?: (rowIndex: number) => void;
}

const AggregateCell: React.FC<AggregateCellProps> = ({
  value,
  rowIndex,
  onHoverRow,
  onDeleteRow,
}) => {
  return (
    <TableCell>
      <div
        className={styles.aggregateCell}
        onMouseEnter={() => onHoverRow?.(rowIndex)}
        onMouseLeave={() => onHoverRow?.(-1)}
      >
        <span>{value}</span>
        {onDeleteRow && (
          <button
            className={styles.deleteButton}
            onClick={() => onDeleteRow(rowIndex)}
          >
            <TrashIcon />
          </button>
        )}
      </div>
    </TableCell>
  );
};

export default React.memo(AggregateCell);
