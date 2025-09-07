import AggregateCell from '../aggregateCell/AggregateCell';
import DataCell from '../dataCell/DataCell';
import RowTitleCell from '../rowTitleCell/RowTitleCell';

interface ITableDataRowProps {
  rowIndex: number;
  title?: string;
  dataCells: ICellData[];
  isPercentDisplay?: boolean;
  rowSum: number;
  cellsToHighlight: Record<string, boolean>;
  onHoverRow?: (rowIndex: number) => void;
  onDeleteRow?: (rowIndex: number) => void;
  handleCellHover: (rowIndex: number, colIndex: number) => void;
  handleCellLeave: VoidFunction;
  handleIncrement: (rowIndex: number, colIndex: number) => void;
}

const TableDataRow: React.FC<ITableDataRowProps> = ({
  rowIndex,
  title,
  dataCells,
  isPercentDisplay = false,
  rowSum,
  cellsToHighlight,
  onHoverRow,
  onDeleteRow,
  handleCellHover,
  handleCellLeave,
  handleIncrement,
}) => {
  return (
    <>
      {typeof title === 'string' && (
        <RowTitleCell
          text={title}
          onDeleteRow={onDeleteRow}
          rowIndex={rowIndex}
        />
      )}

      {dataCells.map((cell, colIndex) => (
        <DataCell
          key={cell.id}
          isPercentDisplay={isPercentDisplay}
          value={cell.amount}
          percent={cell.percent}
          rowIndex={rowIndex}
          colIndex={colIndex}
          onIncrement={handleIncrement}
          isFirstCol={typeof title !== 'string'}
          onHoverCell={handleCellHover}
          onLeaveCell={handleCellLeave}
          isClosest={cell.id in cellsToHighlight}
          percentFromTotal={Number(((cell.amount / rowSum) * 100).toFixed(2))}
        />
      ))}

      <AggregateCell
        value={rowSum}
        rowIndex={rowIndex}
        onHoverRow={onHoverRow}
      />
    </>
  );
};

export default TableDataRow;
