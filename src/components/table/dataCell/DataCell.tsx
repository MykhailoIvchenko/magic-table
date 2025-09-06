import React from 'react';
import TableCell from '@/components/table/tableCell/TableCell';
import Button from '@/components/ui/button/Button';
import styles from './DataCell.module.css';

interface DataCellProps {
  value: number;
  percent?: number;
  rowIndex: number;
  colIndex: number;
  isPercentDisplay: boolean;
  isClosest?: boolean;
  isFirstCol?: boolean;
  onIncrement?: (rowIndex: number, colIndex: number) => void;
  onHoverRow?: (rowIndex: number) => void;
  onRemoveRow?: (rowIndex: number) => void;
}

const DataCell: React.FC<DataCellProps> = ({
  value,
  percent,
  rowIndex,
  colIndex,
  isClosest,
  isFirstCol = false,
  isPercentDisplay,
  onIncrement,
  onHoverRow,
}) => {
  let heatmapClass = '';

  if (percent !== undefined) {
    switch (true) {
      case percent <= 20:
        heatmapClass = styles.heatmap1;
        break;
      case percent <= 40:
        heatmapClass = styles.heatmap2;
        break;
      case percent <= 60:
        heatmapClass = styles.heatmap3;
        break;
      case percent <= 80:
        heatmapClass = styles.heatmap4;
        break;
      default:
        heatmapClass = styles.heatmap5;
    }
  }

  const handleIncrement = () => {
    onIncrement?.(rowIndex, colIndex);
  };

  const handleMouseEnter = () => {
    onHoverRow?.(rowIndex);
  };

  const cellClasses = [
    isPercentDisplay ? heatmapClass : '',
    isClosest ? styles.closestCell : '',
    styles.dataCell,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <TableCell isFirstCol={isFirstCol}>
      <div className={cellClasses} onMouseEnter={handleMouseEnter}>
        {isPercentDisplay ? (
          <>{percent}%</>
        ) : (
          <Button
            variant={'transparent'}
            className={styles.numberButton}
            onClick={handleIncrement}
            title='Click to increment'
          >
            {value}
          </Button>
        )}
      </div>
    </TableCell>
  );
};

export default React.memo(DataCell);
