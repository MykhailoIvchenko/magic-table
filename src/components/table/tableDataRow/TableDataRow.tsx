import { useCallback } from 'react';
import AggregateCell from '../aggregateCell/AggregateCell';
import DataCell from '../dataCell/DataCell';
import RowTitleCell from '../rowTitleCell/RowTitleCell';

interface ITableDataRowProps {
  rowIndex: number;
  title?: string;
  dataCells: ICellData[];
  isPercentDisplay?: boolean;
  rowSum: number;
  onHoverRow?: (rowIndex: number) => void;
  onDeleteRow?: (rowIndex: number) => void;
  handleIncrement: (rowIndex: number, colIndex: number) => void;
}

const TableDataRow: React.FC<ITableDataRowProps> = ({
  rowIndex,
  title,
  dataCells,
  isPercentDisplay = false,
  rowSum,
  onHoverRow,
  onDeleteRow,
  handleIncrement,
}) => {
  const onIncrement = useCallback((rowIndex: number, colIndex: number) => {
    handleIncrement(rowIndex, colIndex);
  }, []);

  return (
    <>
      {typeof title === 'string' && <RowTitleCell text={title} />}

      {dataCells.map((cell, colIndex) => (
        <DataCell
          key={cell.id}
          isPercentDisplay={isPercentDisplay}
          value={cell.amount}
          percent={cell.percent}
          rowIndex={rowIndex}
          colIndex={colIndex}
          onIncrement={onIncrement}
          isFirstCol={typeof title !== 'string'}
        />
      ))}

      <AggregateCell
        value={rowSum}
        rowIndex={rowIndex}
        onHoverRow={onHoverRow}
        onDeleteRow={onDeleteRow}
      />
    </>
  );
};

export default TableDataRow;
